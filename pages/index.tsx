import type { NextPage } from 'next';
import Head from 'next/head';

import HeroSection from '../components/layout/HeroSection';
import InfoSectionImgRight from '../components/layout/InfoSectionImgRight';
import InfoSectionImgLeft from '../components/layout/InfoSectionImgLeft';
import ShopSection from '../components/Shop/ShopSection';
import OriginSection from '../components/layout/OriginSection';
import FeaturesSection from '../components/layout/FeaturesSection';
import MapSection from '../components/layout/MapSection';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Rustica</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className='font-roboto'>
                {/* hero section */}
                <HeroSection />
                <div className='spacer-lg' />

                {/* the caffee section */}
                <InfoSectionImgRight />
                <div className='spacer-md' />

                {/* organic section */}
                <InfoSectionImgLeft />
                <div className='spacer-lg' />

                {/* shop section */}
                <ShopSection />

                {/* origin section */}
                <OriginSection />

                {/* features section */}
                <FeaturesSection />

                {/* map section */}
                <MapSection />

            </main>
        </div>
    );
};

export default Home;
