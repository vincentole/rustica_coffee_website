import Image from 'next/image';

import plantImage from '../../public/img/FEND-coffee-plant.png';

const InfoSectionImgLeft = () => {
    return (
        <section>
            <div className='cstm-container'>
                <h2 className='theme-text-h3-m'>Bio und Fair</h2>
                <div className='spacer-xs' />
                <p className='theme-text-body-m'>
                    Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien
                    leben die Blindtexte. Weit hinten, hinter den Wortbergen, fern der Länder
                    Vokalien und Konsonantien leben die Blindtexte. Und das alles in bester Bio
                    Qualität
                </p>
                <div className='spacer-md' />
                <div>
                    <Image
                        src={plantImage}
                        height={160}
                        width={241}
                        alt='Our Coffee Shop with people enjoing our products.'
                    />
                </div>
            </div>
        </section>
    );
};

export default InfoSectionImgLeft;
