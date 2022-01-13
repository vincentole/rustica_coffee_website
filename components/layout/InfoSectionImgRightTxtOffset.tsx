import Image from 'next/image';

type Props = {
    img: StaticImageData;
    alt: string;
};

const InfoSectionImgRightTxtOffset = ({ img, alt }: Props) => {
    return (
        <section>
            <div className='cstm-container max-w-[440px] mx-auto theme-text-body-m lg:theme-text-body xl:flex lg:max-w-[700px] xl:max-w-[1280px]'>
                <div className='xl:w-[50%] xl:pr-[125px]'>
                    <h2 className='theme-text-h2-m lg:theme-text-h2'>Die Anbaugebiete</h2>
                    <div className='spacer-24 lg:spacer-35' />
                    <p>
                        Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und
                        Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen
                        an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein
                        namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen
                        Regelialien. Es ist ein paradiesmatisches Land, in dem einem gebratene
                        Satzteile in den Mund fliegen.Nicht einmal von der allmächtigen
                        Interpunktion werden die Blindtexte beherrscht – ein geradezu
                        unorthographisches Leben.
                    </p>

                    <div className='spacer-60' />
                </div>

                <div className='xl:w-[50%] xl:pl-[10px]'>
                    <div className='flex justify-end'>
                        <div className='relative w-[241px] h-[160px] xl:w-[717px] xl:h-[476px]'>
                            <Image
                                src={img}
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                                alt={alt}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSectionImgRightTxtOffset;
