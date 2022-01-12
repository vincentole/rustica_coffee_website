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
                <div className='flex flex-col justify-center items-center h-full'>
                    <h1 className='theme-text-h3-m text-white'>Herkunft</h1>
                    <div className='spacer-xs' />
                    <p className='theme-text-body-m text-white w-[240px] md:w-[300px]'>
                        Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und
                        Konsonantien leben die Blindtexte.Und das alles in bester Bio Qualität
                    </p>
                    <div className='spacer-sm' />
                    <div className='theme-text-body-m text-white'>mehr</div>
                </div>
            </div>
        </section>
    );
};

export default OriginSection;
