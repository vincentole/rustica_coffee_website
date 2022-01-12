import ShopItem from './ShopItem';
import Button from '../UI/Button';

const ShopSection = () => {
    return (
        
        <section className='bg-theme-anthrazit text-theme-white'>
            <div className='cstm-container'>
                <div className='spacer-lg' />
                <h2 className='theme-text-h2-m text-center'>Entdecke unsere Kaffee Sorten</h2>
                <div className='spacer-md' />
                <div className='grid grid-cols-2-col-155px gap-x-[16px] gap-y-[40px] justify-center'>
                    <ShopItem />
                    <ShopItem />
                    <ShopItem />
                    <ShopItem />
                </div>
            </div>
            <div className='spacer-md' />
            <div className='flex justify-center'>
                <Button label='alle Produkte' type='link' href='#' borderWhite />
            </div>
            <div className='spacer-lg' />
        </section>
    );
};

export default ShopSection;
