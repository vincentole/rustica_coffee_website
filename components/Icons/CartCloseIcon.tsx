type Props = {
    className?: string;
};

const CartCloseIcon = ({ className }: Props) => (
    <svg
        className={className}
        width='21'
        height='20'
        viewBox='0 0 21 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M1.5 1L10.5 10M19.5 19L10.5 10M10.5 10L1.5 19M10.5 10L19.5 1'
            stroke='currentColor'
            strokeWidth='2'
        />
    </svg>
);
export default CartCloseIcon;
