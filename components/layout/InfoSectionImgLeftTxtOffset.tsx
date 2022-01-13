import Image from 'next/image';

type Props = {
    img: StaticImageData;
    alt: string;
};

const InfoSectionImgLeftTxtOffset = ({ img, alt }: Props) => {
    return (
        <section>
            <div className='cstm-container max-w-[440px] mx-auto theme-text-body-m lg:theme-text-body xl:flex lg:max-w-[700px] xl:max-w-[1280px]'>
                <div className='xl:order-2 xl:w-[50%] xl:pl-[125px]'>
                    <h2 className='theme-text-h3-m lg:theme-text-h3'>Das Wohl der Kaffeebauern</h2>
                    <div className='spacer-12 lg:spacer-24' />
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
                <div className='xl:order-1 xl:w-[50%] xl:pr-[10px]'>
                    <div>
                        <div className='relative w-[241px] h-[320px] xl:w-[508px] xl:h-[675px]'>
                            <Image
                                src={img}
                                layout='fill'
                                objectPosition='center'
                                objectFit='cover'
                                alt={alt}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSectionImgLeftTxtOffset;
