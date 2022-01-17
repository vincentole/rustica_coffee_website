import ShopItem from './ShopItem';

const ShopSection = () => {
    return (
        <section>
            <div className='cstm-container mx-auto'>
                <div className='grid grid-cols-2-col-155px gap-x-[16px] gap-y-[40px] justify-center lg:grid-cols-4-col-155px'>
                    <h2 className='theme-text-h2-m lg:theme-text-h2 col-span-full'>
                        Entdecke unsere
                        <br />
                        Kaffee Sorten
                    </h2>
                    <ShopItem />
                    <ShopItem />
                    <ShopItem />
                    <ShopItem />
                    <ShopItem />
                    <ShopItem />
                    <ShopItem />
                    <ShopItem />
                </div>
            </div>
        </section>
    );
};

export default ShopSection;
