import Head from 'next/head';
import HeroSectionImg from '../components/layout/HeroSectionImg';

import heroImage from '../public/img/FEND-Coffee-shop.png';
import shopImage from '../public/img/FEND-coffee-machine.png';
import InfoSectionImgRight from '../components/layout/InfoSectionImgRight';
import InfoSectionText from '../components/layout/InfoSectionText';
import MapSection from '../components/layout/MapSection';
import GallerySection from '../components/layout/GallerySection';

const infoSectionTextData = {
    title: 'Frisches Gebäck von nebenan',
    text: 'Als es die ersten Hügel des Kursivgebirges erklommen hatte, warf es einen letzten Blick zurück auf die Skyline seiner Heimatstadt Buchstabhausen, die Headline von Alphabetdorf. Wehmütig lief ihm eine rhetorische Frage über die Wange, dann setzte es seinen Weg fort. Unterwegs traf es eine Copy. Die Copy warnte das Blindtextchen, da, wo sie herkäme wäre sie zigmal umgeschrieben worden und alles, was von ihrem Ursprung noch übrig wäre, sei das Wort und und das Blindtextchen solle umkehren und wieder in sein eigenes, sicheres Land zurückkehren.',
};

const dasCafe = () => {
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
                <HeroSectionImg img={heroImage} />
                <div className='spacer-60 lg:spacer-125' />

                {/* the caffee section */}
                <InfoSectionImgRight
                    img={shopImage}
                    alt='our store with people enjoing our products'
                />
                <div className='spacer-60 lg:spacer-125' />

                {/* info text section */}
                <InfoSectionText
                    title={infoSectionTextData.title}
                    text={infoSectionTextData.text}
                />
                <div className='spacer-60 lg:spacer-125' />

                {/* gallery section */}
                <GallerySection />
                <div className='spacer-60 lg:spacer-125' />

                {/* map section */}
                <MapSection />
            </main>
        </>
    );
};

export default dasCafe;
