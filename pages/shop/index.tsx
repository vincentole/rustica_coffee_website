import { GetStaticProps } from 'next';
import Head from 'next/head';
import MapSection from '../../components/layout/MapSection';
import ShopSection from '../../components/Shop/ShopSection';

import shopItemsData from '../../data/shopItemsData';
import ShopItemType from '../../types/shopItemType';

const Shop: React.FC<{ shopItems: ShopItemType[] }> = ({ shopItems }) => {
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
    const shopItems: ShopItemType[] = shopItemsData;

    return { props: { shopItems: shopItems } };
};
