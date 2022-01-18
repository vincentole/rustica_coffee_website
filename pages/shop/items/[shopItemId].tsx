import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import MapSection from '../../../components/layout/MapSection';
import ShopItemDetails from '../../../components/Shop/ShopItemDetails';
import ShopSectionTopProducts from '../../../components/Shop/ShopSectionTopProducts';

import shopItemsData from '../../../data/shopItems';
import ShopItemType from '../../../types/shopItem';

const ItemDetails: React.FC<{ shopItem: ShopItemType }> = ({ shopItem }) => {
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
                <ShopSectionTopProducts />
                <div className='spacer-60 lg:spacer-125' />
                <MapSection />
            </main>
        </>
    );
};

export default ItemDetails;

export const getStaticProps: GetStaticProps = async (context) => {
    const shopItems: ShopItemType[] = shopItemsData;
    const shopItem = shopItems.filter((item) => item.id === context.params!.shopItemId);
    console.log(shopItem);
    return { props: { shopItem: shopItem[0] } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const shopItems: ShopItemType[] = shopItemsData;
    const paths = shopItems.map((item) => ({ params: { shopItemId: item.id } }));

    return {
        paths: paths,
        fallback: false,
    };
};
