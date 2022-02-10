import Image from 'next/image';
import IconKaffeeBohnen from '../Icons/IconKaffeeBohnen';
import FrenchPressIcon from '../Icons/IconFrenchPress';
import IconKaffeeSchaufel from '../Icons/IconKaffeeSchaufel';

import coffeeCostaRica from '/public/img/FEND_Coffee_Costa-Rica 1.png';
import Link from 'next/link';
import TopProductType from '../../types/topProductType';

type Props = {
    item: TopProductType;
};

const ShopItemTopProducts: React.FC<Props> = ({ item }) => {
    return (
        <Link href={`/shop/items/${item.slug}`}>
            <a>
                <div className='space-y-1'>
                    <div className='relative w-[155px] h-[208px] lg:w-[155px] lg:h-[208px]'>
                        <Image
                            src={coffeeCostaRica}
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                            alt='Rustica coffe bag type Costa Rica'
                            className='bg-theme-white'
                        />
                    </div>
                    <h3 className='theme-text-subh-m'>{item.title}</h3>
                    <div className='theme-text-body-m text-theme-medium-gray lg:theme-text-body'>
                        {`${item.allPrices[0].toFixed(2)}€ – ${item.allPrices[
                            item.allPrices.length - 1
                        ].toFixed(2)}€`}
                    </div>
                    <div className='flex items-center gap-2'>
                        <IconKaffeeBohnen className='w-[12px] h-[14px] lg:w-[17px] lg:h-[20px]' />
                        <FrenchPressIcon className='w-[10px] h-[12px] lg:w-[14px] lg:h-[17px]' />
                        <IconKaffeeSchaufel className='w-[12px] h-[13px] lg:w-[17px] lg:h-[18px]' />
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default ShopItemTopProducts;
