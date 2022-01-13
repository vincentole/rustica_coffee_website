import Head from 'next/head';
import HeroSectionImg from '../components/layout/HeroSectionImg';
import InfoSectionImgLeftTxtOffset from '../components/layout/InfoSectionImgLeftTxtOffset';
import InfoSectionImgRightTxtOffset from '../components/layout/InfoSectionImgRightTxtOffset';
import InfoSectionText from '../components/layout/InfoSectionText';
import YouTube from '../components/layout/YouTube';

import heroImage from '../public/img/FEND-Coffee-beans-hand-2.png';
import coffeePlantImage from '../public/img/FEND-coffee-plant-2.png';
import coffeeWorkerImage from '../public/img/FEND-Coffee-worker.png';

const infoSectionTextData = {
    title: 'Der Ursprung von Rustica',
    text: 'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene Satzteile in den Mund fliegen.Nicht einmal von der allmächtigen Interpunktion werden die Blindtexte beherrscht – ein geradezu unorthographisches Leben.',
};

const Herkunft = () => {
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

                {/* info text section */}
                <InfoSectionText
                    title={infoSectionTextData.title}
                    text={infoSectionTextData.text}
                />
                <div className='spacer-60 lg:spacer-125' />

                {/* video section */}
                <YouTube />
                <div className='spacer-60 lg:spacer-125' />

                {/* info image right section */}
                <InfoSectionImgRightTxtOffset img={coffeePlantImage} alt='coffee plant' />
                <div className='spacer-60 lg:spacer-125' />

                {/* info image left section */}
                <InfoSectionImgLeftTxtOffset
                    img={coffeeWorkerImage}
                    alt='coffee worker picking coffee beans'    
                />
                <div className='spacer-60 lg:spacer-125' />
            </main>
        </>
    );
};

export default Herkunft;
