import Image from 'next/image';
import Address from '../Store/Address';
import OpeningHours from '../Store/OpeningHours';

import shopImage from '../../public/img/FEND-Coffee-shop.png';

const InfoSectionImgRight = () => {
    return (
        <section>
            <div className='cstm-container'>
                <h2 className='theme-text-h2-m'>Rösterei & Café</h2>
                <div className='spacer-sm' />
                <p className='theme-text-body-m'>
                    Kaffee aus Kiel, direkt gehandelt und geröstet in der eigenen Rösterei, serviert
                    im gemütlichen Café in der Innenstadt.
                </p>
                <div className='spacer-sm' />
                <div className='flex justify-between gap-10 theme-text-body-m'>
                    <Address />
                    <OpeningHours />
                </div>
                <div className='spacer-md' />
                <div className='flex justify-end'>
                    <Image
                        src={shopImage}
                        height={182}
                        width={241}
                        alt='Our Coffee Shop with people enjoing our products.'
                    />
                </div>
            </div>
        </section>
    );
};

export default InfoSectionImgRight;
