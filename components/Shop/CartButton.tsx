
import { useDispatch } from 'react-redux';
import { AppDispatch} from '../../store/store';
import { uiActions } from "../../store/uiSlice";
import ShopIcon from "../Icons/ShopIcon";

type Props = {
    className?: string;
};

const CartButton: React.FC<Props> = ({className}) => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        
        <button
            type='button'
            aria-label='Warenkorb öffnen'
            onClick={() => dispatch(uiActions.openCart())}
            className={`hover:opacity-70 ${className}` }
        >
            <ShopIcon className='w-[17px] h-[20px]' />
        </button>
    );
};

export default CartButton;