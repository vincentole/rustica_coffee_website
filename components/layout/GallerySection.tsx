import Image from 'next/image';

import galleryImg1 from '../../public/img/FEND-danish-1.png';
import galleryImg2 from '../../public/img/FEND-Coffee-machine-2.png';
import galleryImg3 from '../../public/img/FEND-Coffee-latte-art.png';
import galleryImg4 from '../../public/img/FEND-Coffee-sign.png';
import galleryImg5 from '../../public/img/FEND-Coffee-latte-art-2.png';
import galleryImg6 from '../../public/img/FEND-coffee-breakfast 1.png';
import galleryImg7 from '../../public/img/FEND-coffee-list.png';
import galleryImg8 from '../../public/img/FEND-Coffee-latte-art-3.png';

const GallerySection = () => {
    return (
        <section className='flex justify-center'>
            <div className='inline-block columns-2 lg:columns-4 gap-x-[16px] space-y-[14px]'>
                <div className='relative w-[156px] h-[117px]'>
                    <Image
                        src={galleryImg1}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        alt='fresh croissants'
                    />
                </div>
                <div className='hidden lg:block relative w-[156px] h-[208px]'>
                    <Image
                        src={galleryImg4}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        alt='coffee neon sign'
                    />
                </div>
                <div className='hidden lg:block relative w-[156px] h-[205px]'>
                    <Image
                        src={galleryImg5}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        alt='four coffees with latte art'
                    />
                </div>
                <div className='hidden lg:block relative w-[156px] h-[118px]'>
                    <Image
                        src={galleryImg8}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        alt='three coffees with latte art'
                    />
                </div>
                <div className='relative w-[156px] h-[104px]'>
                    <Image
                        src={galleryImg2}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        alt='fresh coffee'
                    />
                </div>
                <div className='relative w-[156px] h-[209px]'>
                    <Image
                        src={galleryImg3}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        alt='coffe latte art'
                    />
                </div>
                <div className='relative w-[156px] h-[208px] lg:hidden'>
                    <Image
                        src={galleryImg4}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        alt='coffee neon sign'
                    />
                </div>
                <div className='relative w-[156px] h-[205px] lg:hidden'>
                    <Image
                        src={galleryImg5}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        alt='four coffees with latte art'
                    />
                </div>
                <div className='hidden lg:block relative w-[156px] h-[207px]'>
                    <Image
                        src={galleryImg7}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        alt='menu board'
                    />
                </div>
                <div className='relative w-[156px] h-[102px]'>
                    <Image
                        src={galleryImg6}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        alt='coffe with breakfast'
                    />
                </div>
                <div className='relative w-[156px] h-[207px] lg:hidden'>
                    <Image
                        src={galleryImg7}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        alt='menu board'
                    />
                </div>
                <div className='relative w-[156px] h-[118px] lg:hidden'>
                    <Image
                        src={galleryImg8}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        alt='three coffees with latte art'
                    />
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
