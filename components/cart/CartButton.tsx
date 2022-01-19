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
            className={`hover:opacity-70 ${className}`}
        >
            <ShopIcon className='w-[17px] h-[20px]' />
            {}
        </button>
    );
};

export default CartButton;
