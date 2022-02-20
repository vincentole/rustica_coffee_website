import ShopItem from './ShopItem';
import Link from 'next/link';
import ShopItemsType from '../../types/shopItemsType';

const ShopSection: React.FC<{ shopItems: ShopItemsType }> = ({ shopItems }) => {
    const itemList = shopItems.map((item) => (
        <Link key={item.id} href={`/shop/items/${item.slug}`}>
            <a>
                <ShopItem img={item.image.url} title={item.title} prices={item.allPrices} />
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
