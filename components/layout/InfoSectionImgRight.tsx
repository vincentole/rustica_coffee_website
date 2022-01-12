import Image from 'next/image';
import Address from '../Store/Address';
import OpeningHours from '../Store/OpeningHours';

import shopImage from '../../public/img/FEND-Coffee-shop.png';

const InfoSectionImgRight = () => {
    return (
        <section>
            <div className='cstm-container max-w-[440px] mx-auto theme-text-body-m lg:theme-text-body xl:flex lg:max-w-[700px] xl:max-w-[1280px]'>
                <div className='xl:w-[50%] xl:pr-[125px]'>
                    <h2 className='theme-text-h2-m lg:theme-text-h2'>Rösterei & Café</h2>
                    <div className='spacer-20' />
                    <p>
                        Kaffee aus Kiel, direkt gehandelt und geröstet in der eigenen Rösterei,
                        serviert im gemütlichen Café in der Innenstadt.
                    </p>
                    <div className='spacer-20' />
                    <div className='flex justify-between gap-10 '>
                        <Address />
                        <OpeningHours />
                    </div>
                    <div className='spacer-40' />
                </div>

                <div className='xl:w-[50%] xl:pl-[10px]'>
                    <div className='flex justify-end'>
                        <div className='relative w-[241px] h-[182px] xl:w-[607px] xl:h-[391px]'>
                            <Image
                                src={shopImage}
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                                alt='Our Coffee Shop with people enjoing our products.'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSectionImgRight;
