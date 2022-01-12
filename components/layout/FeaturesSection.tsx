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
                <div className='spacer-lg' />
                <h2 className='theme-text-h2-m text-center'>Das steckt drin</h2>
                <div className='spacer-md' />
                <div>
                    <div className='flex justify-center'>
                        <Image
                            src={bagsLargeImage}
                            width='214'
                            height='284'
                            alt='Rustica coffe bag type Costa Rica'
                        />
                    </div>
                    <div className='spacer-md' />

                    <div className='flex flex-col items-center'>
                        <div className='flex gap-[60px]'>
                            <div className='theme-text-body-m flex flex-col items-center text-center'>
                                <IconKaffeeTasse className='w-[45] h-[46]' />
                                <div className='spacer-sm' />
                                <div>{'Bester\nGeschmack'}</div>
                            </div>
                            <div className='theme-text-body-m flex flex-col items-center text-center'>
                                <IconKaffeeSchaufel className='w-[44] h-[47]' />
                                <div className='spacer-sm' />
                                <div>{'Fair\ngehandelt'}</div>
                            </div>
                            <div className='theme-text-body-m flex flex-col items-center text-center'>
                                <IconKaffeePflanze className='w-[44] h-[48]' />
                                <div className='spacer-sm' />
                                <div>{'Bio\nQualität'}</div>
                            </div>
                        </div>
                        <div className='spacer-md' />
                        <div>
                            <Button label='zum Shop' type='anchor' anchorId='#' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='spacer-lg' />
        </section>
    );
};

export default FeaturesSection;
