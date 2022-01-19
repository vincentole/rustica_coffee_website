import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import { AppDispatch, RootState } from '../../store/store';
import ShopIcon from '../Icons/ShopIcon';

type Props = {
    className?: string;
};

const CartButton: React.FC<Props> = ({ className }) => {
    const dispatch = useDispatch<AppDispatch>();
    const amountCartItems = useSelector((state: RootState) =>
        state.cart.items.reduce((total, item) => total + item.amount, 0),
    );

    return (
        <button
            type='button'
            aria-label='Warenkorb öffnen'
            onClick={() => dispatch(cartActions.openCart())}
            className={`relative p-1 hover:opacity-70 ${className}`}
        >
            <ShopIcon className='w-[17px] h-[20px]' />
            {amountCartItems && (
                <div className='absolute top-0 right-0 translate-x-1/3 -translate-y-1/3  rounded-full bg-theme-petrol w-[18px] aspect-square text-xs flex justify-center items-center text-white'>
                    {amountCartItems}
                </div>
            )}
        </button>
    );
};

export default CartButton;
