import type { NextPage } from 'next';
import Head from 'next/head';

import HeroSectionTxtCta from '../components/layout/HeroSectionTxtCta';
import InfoSectionImgRight from '../components/layout/InfoSectionImgRight';
import InfoSectionImgLeft from '../components/layout/InfoSectionImgLeft';
import ShopSection from '../components/Shop/ShopSection';
import OriginSection from '../components/layout/OriginSection';
import FeaturesSection from '../components/layout/FeaturesSection';
import MapSection from '../components/layout/MapSection';

import shopImage from '../public/img/FEND-Coffee-shop.png';
import plantImage from '../public/img/FEND-coffee-plant.png';
const Home: NextPage = () => {
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
                {/* hero section */}
                <HeroSectionTxtCta />
                <div className='spacer-60 lg:spacer-125' />

                {/* the caffee section */}
                <InfoSectionImgRight img={shopImage} alt='our store with people enjoing our products'/>
                <div className='spacer-40 lg:spacer-125' />

                {/* organic section */}
                <InfoSectionImgLeft img={plantImage} alt='coffee plant'/>
                <div className='spacer-60 lg:spacer-125' />

                {/* shop section */}
                <ShopSection />

                {/* origin section */}
                <OriginSection />
                <div className='spacer-60 lg:spacer-125' />

                {/* features section */}
                <FeaturesSection />
                <div className='spacer-60 lg:spacer-125' />

                {/* map section */}
                <MapSection />
            </main>
        </>
    );
};

export default Home;
