import Image from 'next/image';

import plantImage from '../../public/img/FEND-coffee-plant.png';

const InfoSectionImgLeft = () => {
    return (
        <section>
            <div className='cstm-container max-w-[440px] mx-auto theme-text-body-m lg:theme-text-body xl:flex lg:max-w-[700px] xl:max-w-[1280px]'>
                <div className='xl:order-2 xl:w-[50%] xl:pl-[125px]'>
                    <h2 className='theme-text-h3-m lg:theme-text-h3'>Bio und Fair</h2>
                    <div className='spacer-12 lg:spacer-24' />
                    <p>
                        Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und
                        Konsonantien leben die Blindtexte. Weit hinten, hinter den Wortbergen, fern
                        der Länder Vokalien und Konsonantien leben die Blindtexte. Und das alles in
                        bester Bio Qualität
                    </p>
                    <div className='spacer-5' />
                    <div>mehr</div>
                    <div className='spacer-40' />
                </div>
                <div className='xl:order-1 xl:w-[50%] xl:pr-[10px]'>
                    <div>
                        <div className='relative w-[241px] h-[160px] xl:w-full xl:h-[406px]'>
                            <Image
                                src={plantImage}
                                layout='fill'
                                objectPosition='center'
                                objectFit='cover'
                                alt='Our Coffee Shop with people enjoing our products.'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSectionImgLeft;
