import ShopItem from './ShopItem';
import ShopItemType from '../../types/shopItemType';
import Link from 'next/link';

const ShopSection: React.FC<{ shopItems: ShopItemType[] }> = ({ shopItems }) => {
    const itemList = shopItems.map((item) => (
        <Link key={item.id} href={`/shop/items/${item.id}`}>
            <a>
                <ShopItem img={item.img} title={item.title} prices={item.prices} />
            </a>
        </Link>
    ));
    return (
        <section>
            <div className='cstm-container mx-auto'>
                <div className='grid grid-cols-2-col-155px gap-x-[16px] gap-y-[40px] justify-center lg:grid-cols-4-col-155px'>
                    <h2 className='theme-text-h2-m lg:theme-text-h2 col-span-full'>
                        Entdecke unsere
                        <br />
                        Kaffee Sorten
                    </h2>
                    {itemList}
                </div>
            </div>
        </section>
    );
};

export default ShopSection;
