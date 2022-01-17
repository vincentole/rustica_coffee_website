import Head from 'next/head';
import MapSection from '../components/layout/MapSection';
import ShopSection from '../components/Shop/ShopSection';

const Shop = () => {
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
                <ShopSection />
                <div className='spacer-60 lg:spacer-125' />

                <MapSection />
            </main>
        </>
    );
};

export default Shop;
