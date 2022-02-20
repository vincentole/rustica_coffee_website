import { GetStaticProps } from 'next';
import Head from 'next/head';
import MapSection from '../../components/layout/MapSection';
import ShopSection from '../../components/Shop/ShopSection';

import { graphcmsRequest } from '../../graphql/client';
import { shopItemsQuery } from '../../graphql/queries';
import ShopItemsType from '../../types/shopItemsType';

const Shop: React.FC<{ shopItems: ShopItemsType }> = ({ shopItems }) => {
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
                <ShopSection shopItems={shopItems} />
                <div className='spacer-60 lg:spacer-125' />

                <MapSection />
            </main>
        </>
    );
};

export default Shop;

export const getStaticProps: GetStaticProps = async () => {
    const { products: shopItems } = await graphcmsRequest<{ products: ShopItemsType }>(
        shopItemsQuery(),
    );

    return { props: { shopItems: shopItems } };
};
