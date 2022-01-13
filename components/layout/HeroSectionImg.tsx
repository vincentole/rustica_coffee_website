import Image from 'next/image';

type Props = {
    img: StaticImageData;
};

const HeroSectionImg = ({ img }: Props) => {
    return (
        <section className='relative h-[75vh] min-h-[320px] md:h-[65vh]'>
            <div className='relative w-full h-full'>
                <Image
                    src={img}
                    alt='coffe latte art'
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    priority
                />
            </div>
            <div className='absolute bg-black/30 inset-0' />
        </section>
    );
};

export default HeroSectionImg;
