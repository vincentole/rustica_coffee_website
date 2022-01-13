import Image from 'next/image';
import Button from '../UI/Button';

import IconKaffeeTasse from '../Icons/IconKaffeeTasse';
import IconKaffeeSchaufel from '../Icons/IconKaffeeSchaufel';
import IconKaffeePflanze from '../Icons/IconKaffeePflanze';

import bagsLargeImage from '../../public/img/FEND_Coffee_Costa-Rica 1.png';

const FeaturesSection = () => {
    return (
        <section>
            <div className='cstm-container'>
                <h2 className='theme-text-h2-m text-center lg:theme-text-h2'>Das steckt drin</h2>
                <div className='spacer-40 lg:spacer-90' />
                <div className='lg:flex lg:justify-center'>
                    <div className='flex justify-center'>
                        <div>
                            <div className='relative w-[214px] h-[284px] lg:w-[402px] lg:h-[521px]'>
                                <Image
                                    src={bagsLargeImage}
                                    layout='fill'
                                    objectFit='cover'
                                    objectPosition='center'
                                    alt='Rustica coffe bag type Costa Rica'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='spacer-40' />

                    <div className='flex flex-col items-center lg:justify-center'>
                        <div className='flex gap-[60px] lg:flex-col theme-text-body-m lg:theme-text-body'>
                            <div className=' flex flex-col items-center text-center'>
                                <IconKaffeeTasse className='w-[45px] h-[46px]' />
                                <div className='spacer-20' />
                                <div>{'Bester\nGeschmack'}</div>
                            </div>
                            <div className=' flex flex-col items-center text-center'>
                                <IconKaffeeSchaufel className='w-[44px] h-[47px]' />
                                <div className='spacer-20' />
                                <div>{'Fair\ngehandelt'}</div>
                            </div>
                            <div className=' flex flex-col items-center text-center'>
                                <IconKaffeePflanze className='w-[44px] h-[48px]' />
                                <div className='spacer-20' />
                                <div>{'Bio\nQualität'}</div>
                            </div>
                        </div>
                        <div className='spacer-40 ' />
                        <div>
                            <Button label='zum Shop' type='anchor' anchorId='#' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
