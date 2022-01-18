import Head from 'next/head';
import ContactSection from '../../components/layout/ContactFormSection';
import MapSection from '../../components/layout/MapSection';
import { GetStaticProps } from 'next';

type Values = {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    dataSecurity: boolean;
};

const Kontakt = () => {
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
                <ContactSection />
                <div className='spacer-60 lg:spacer-125' />
                <MapSection />
            </main>
        </>
    );
};

export default Kontakt;
