import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next';
import Head from 'next/head';
import MapSection from '../../../components/layout/MapSection';
import ShopItemDetails from '../../../components/Shop/ShopItemDetails';
import ShopSectionTopProducts from '../../../components/Shop/ShopSectionTopProducts';

import { graphcmsRequest } from '../../../graphql/client';
import {
    shopItemBySlugQuery,
    shopItemsAllSlugsQuery,
    shopItemsQuery,
} from '../../../graphql/queries';
import ShopItemDetailsType from '../../../types/shopItemDetailsType';
import shopItemsType from '../../../types/shopItemsType';

const ItemDetails: React.FC<{ shopItem: ShopItemDetailsType; shopItems: shopItemsType }> = ({
    shopItem,
    shopItems,
}) => {
    return (
        <>
            <Head>
                <title>Rustica</title>
                <meta
                    name='description'
                    content='Kaffee aus Kiel, direkt gehandelt und geröstet in der eigenen Rösterei, serviert im gemütlichen Café in der Innenstadt.'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <div className='spacer-55 bg-theme-anthrazit' />
                <div className='spacer-55 bg-theme-anthrazit' />
                <div className='spacer-60 lg:spacer-125' />
                <ShopItemDetails shopItem={shopItem} />
                <div className='spacer-60 lg:spacer-125' />
                <ShopSectionTopProducts products={shopItems} />
                <div className='spacer-60 lg:spacer-125' />
                <MapSection />
            </main>
        </>
    );
};

export default ItemDetails;

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const slug = context?.params?.shopItemId;

    if (typeof slug != 'string') return { notFound: true };

    const { products: shopItem } = await graphcmsRequest<{ products: ShopItemDetailsType[] }>(
        shopItemBySlugQuery(slug),
    );
    const { products: shopItems } = await graphcmsRequest<{ products: shopItemsType }>(
        shopItemsQuery(),
    );
    return { props: { shopItem: shopItem[0], shopItems } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const { products } = await graphcmsRequest<{ products: { id: string; slug: string }[] }>(
        shopItemsAllSlugsQuery(),
    );
    const paths = products.map((item) => ({ params: { shopItemId: item.slug } }));
    return {
        paths: paths,
        fallback: false,
    };
};
