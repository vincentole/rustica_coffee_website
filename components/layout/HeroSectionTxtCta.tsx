import Image from 'next/image';
import Button from '../UI/Button';

import heroImage from '../../public/img/FEND-Coffee-latte-art-3.png';

const HeroSectionTxtCta = () => {
    return (
        <section className='relative h-[75vh] min-h-[320px] md:h-[65vh]'>
            <div className='relative w-full h-full'>
                <Image
                    src={heroImage}
                    alt='coffe latte art'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    priority
                />
            </div>
            <div className='absolute bg-black/30 inset-0'>
                <div className='flex flex-col justify-center items-center h-full'>
                    <h1 className='theme-text-h1-m text-white lg:theme-text-h1'>Rustica</h1>
                    <div className='theme-text-subh-m text-white'>Bio und Fair seit 1991</div>
                </div>
                <div className='relative bottom-[25%] flex justify-center'>
                    <Button label='zum Shop' type='anchor' anchorId='#' />
                </div>
            </div>
        </section>
    );
};

export default HeroSectionTxtCta;
