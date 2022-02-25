import ShopItemTopProducts from './ShopItemTopProducts';
import Button from '../UI/Button';
import { randomNFromArray } from '../../lib/utilities';
import shopItemsType from '../../types/shopItemsType';
import shopItemType from '../../types/shopItemType';
import { useEffect, useState } from 'react';

type Props = {
    products: shopItemsType;
};

const ShopSectionTopProducts: React.FC<Props> = ({ products }) => {
    const [productList, setProductList] = useState<JSX.Element[] | null>(null);

    useEffect(() => {
        // Using useEffect beacuse of hydration error
        const randomProducts = randomNFromArray<shopItemType>(products, 4);
        const itemList = randomProducts.map((item) => (
            <ShopItemTopProducts key={item.id} item={item} />
        ));

        setProductList(itemList);
    }, [products]);

    return (
        <section className='bg-theme-anthrazit text-theme-white'>
            <div className='cstm-container'>
                <div className='spacer-60 lg:spacer-125' />
                <div className='grid grid-cols-2-col-155px gap-x-[16px] gap-y-[40px] justify-center lg:grid-cols-4-col-155px'>
                    <h2 className='theme-text-h2-m lg:theme-text-h2 col-span-full'>
                        Entdecke unsere
                        <br />
                        Kaffee Sorten
                    </h2>
                    {productList}
                </div>
            </div>
            <div className='spacer-40 lg:spacer-80' />
            <div className='flex justify-center'>
                <Button label='alle Produkte' type='link' href='/shop' borderWhite />
            </div>
            <div className='spacer-60 lg:spacer-125' />
        </section>
    );
};

export default ShopSectionTopProducts;
