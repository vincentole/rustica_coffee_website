import Head from 'next/head';
import MailIcon from '../../components/Icons/MailIcon';
import SuccessIcon from '../../components/Icons/SuccessIcon';
import ContactSection from '../../components/layout/ContactFormSection';
import MapSection from '../../components/layout/MapSection';

const SendenErfolgreich = () => {
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
                <section className='flex justify-center theme-text-body-m lg:theme-text-body'>
                    <div className='cstm-container'>
                        <h2 className='theme-text-h2-m lg:theme-text-h2'>
                            Senden
                            <br />
                            Erfolgreich!
                        </h2>
                        <div className='spacer-35 lg:spacer-55' />
                        <div>
                            <SuccessIcon className='text-theme-petrol inline' />
                            <MailIcon className='text-theme-petrol inline' />
                        </div>
                        <div className='spacer-12' />
                        <p>Vielen Dank, Ihre Nachricht wurde erfolgreich versendet.</p>
                    </div>
                </section>
                <div className='spacer-60 lg:spacer-125' />
                <MapSection />
            </main>
        </>
    );
};

export default SendenErfolgreich;
