import Image from 'next/image';
import IconKaffeeBohnen from '../Icons/IconKaffeeBohnen';
import FrenchPressIcon from '../Icons/IconFrenchPress';
import IconKaffeeSchaufel from '../Icons/IconKaffeeSchaufel';

type Props = {
    title: string;
    prices: number[];
    img: string;
};

const ShopItem: React.FC<Props> = ({ img, title, prices }) => {
    return (
        <div className='space-y-1'>
            <div className='relative w-[155px] h-[208px] lg:w-[155px] lg:h-[208px]'>
                <Image
                    src={img}
                    layout='fill'
                    objectFit='cover'
                    objectPosition='center'
                    alt='Rustica coffe bag type Costa Rica'
                    className='bg-theme-light-gray'
                    priority={true}
                />
            </div>
            <h3 className='theme-text-subh-m'>{title}</h3>
            <div className='theme-text-body-m text-theme-medium-gray lg:theme-text-body'>
                {`${prices[0].toFixed(2)}€ – ${prices[prices.length - 1].toFixed(2)}€`}
            </div>
            <div className='flex items-center gap-2 text-theme-anthrazit'>
                <IconKaffeeBohnen className='w-[12px] h-[14px] lg:w-[17px] lg:h-[20px]' />
                <FrenchPressIcon className='w-[10px] h-[12px] lg:w-[14px] lg:h-[17px]' />
                <IconKaffeeSchaufel className='w-[12px] h-[13px] lg:w-[17px] lg:h-[18px]' />
            </div>
        </div>
    );
};

export default ShopItem;
