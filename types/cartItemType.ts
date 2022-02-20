type CartItemType = {
    id: string;
    title: string;
    bagSize: number;
    variant: string;
    amount: number;
    price: number;
    image: { url: string };
};

export default CartItemType;
