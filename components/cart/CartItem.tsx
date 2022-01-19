import CartItemType from '../../types/cartItemType';

const CartItem: React.FC<{ item: CartItemType }> = ({ item }) => {
    return (
        <li className='pb-[25px] pt-[25px] border-t border-theme-light-gray'>
            <div>{item.title}</div>
        </li>
    );
};

export default CartItem;
