import Image from 'next/image';
import coffeeCostaRica from '/public/img/FEND_Coffee_Costa-Rica 1.png';
import IconKaffeeBohnen from '../Icons/IconKaffeeBohnen';
import FrenchPressIcon from '../Icons/IconFrenchPress';
import IconKaffeeSchaufel from '../Icons/IconKaffeeSchaufel';

const ShopItem = () => {
    return (
        <div className='space-y-1'>
            <Image
                src={coffeeCostaRica}
                width={155}
                height={208}
                alt='Rustica coffe bag type Costa Rica'
                className='bg-theme-white'
            />
            <h3 className='theme-text-subh-m'>Costa Rica</h3>
            <div className='theme-text-body-m text-theme-medium-gray'>6,90€ – 26,90€</div>
            <div className='flex items-center gap-2'>
                <IconKaffeeBohnen width='12' height='14' />
                <FrenchPressIcon width='10' height='12' />
                <IconKaffeeSchaufel width='12' height='13' />
            </div>
        </div>
    );
};

export default ShopItem;
