import Image from 'next/image';

import bagsImage from '../../public/img/FEND-Coffee-bags-2.png';

const OriginSection = () => {
    return (
        <section className='relative h-[50vh] min-h-[320px]'>
            <div className='relative w-full h-full'>
                <Image
                    src={bagsImage}
                    alt='coffee bean bags'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    priority
                />
            </div>
            <div className='absolute bg-black/30 inset-0'>
                <div className='flex flex-col justify-center items-center h-full theme-text-body-m text-center lg:theme-text-body'>
                    <h2 className='theme-text-h3-m text-white lg:theme-text-h3'>Herkunft</h2>
                    <div className='spacer-12' />
                    <p className='text-white w-[400px]'>
                        Weit hinten, hinter den Wortbergen, <br />
                        fern der Länder Vokalien und
                        <br />
                        Konsonantien leben die Blindtexte.
                        <br />
                        Und das alles in bester Bio Qualität
                    </p>
                    <div className='spacer-20 lg:spacer-35' />
                    <div className='text-white'>mehr</div>
                </div>
            </div>
        </section>
    );
};

export default OriginSection;
