import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import { AppDispatch } from '../../store/store';
import CartItemType from '../../types/cartItemType';
import CloseIcon from '../Icons/CloseIcon';
import MinusIcon from '../Icons/MinusIcon';
import PlusIcon from '../Icons/PlusIcon';

const CartItem: React.FC<{ item: CartItemType }> = ({ item }) => {
    const dispatch = useDispatch<AppDispatch>();

    const addOneToCartHandler = () => {
        dispatch(cartActions.addOneToCart({ ...item }));
    };

    const removeOneFromCartHandler = () => {
        dispatch(cartActions.removeOneFromCart({ id: item.id }));
    };

    const removeProductHandler = () => {
        dispatch(cartActions.removeProduct({ id: item.id }));
    };

    return (
        <li className='pb-[25px] pt-[25px] border-t border-theme-light-gray first:border-none'>
            <div className='flex justify-between'>
                <div className='relative w-[110px] h-[124px] bg-theme-kraftpapier'>
                    <Image
                        src={item.img}
                        layout='fill'
                        objectFit='contain'
                        objectPosition='center'
                        alt='Coffee Bag'
                        className='bg-theme-kraftpapier'
                    />
                </div>
                <div className='flex flex-col justify-between'>
                    <div>
                        <h3 className='font-bold'>{item.title}</h3>
                        <div className='spacer-5' />
                        <div>{item.variant}</div>
                        <div>{`${item.bagSize}g`}</div>
                    </div>
                    <div className='space-x-4'>
                        <button
                            onClick={removeOneFromCartHandler}
                            type='button'
                            aria-label='Anzahl um eins veringern'
                        >
                            <MinusIcon className='w-[15px] h-[h-15px]' />
                        </button>
                        <button
                            onClick={addOneToCartHandler}
                            type='button'
                            aria-label='Anzahl um eins erhöhen'
                        >
                            <PlusIcon className='w-[15px] h-[h-15px]' />
                        </button>
                    </div>
                </div>
                <div className='flex flex-col items-end justify-between'>
                    <div>
                        <div>{`${item.price.toFixed(2)}€`}</div>
                        <div className='spacer-5' />
                        <div>{`×${item.amount}`}</div>
                        <div className='spacer-5' />
                        <div className='border-t border-theme-light-gray' />
                        <div className='spacer-5' />
                        <div>{`${(item.amount * item.price).toFixed(2)}€`}</div>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <button
                            onClick={removeProductHandler}
                            type='button'
                            aria-label='Produkt aus dem Warenkorb entfernen'
                        >
                            <CloseIcon className='w-[12px] h-[h-12px]' />
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
