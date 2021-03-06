type Props = {
    className?: string;
};

const ShopIcon = ({ className }: Props) => (
    <svg
        className={className}
        width='19'
        height='22'
        viewBox='0 0 19 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M5.5 9V5.5C5.5 5.5 5.5 1 9.75 1C14 1 14 5.5 14 5.5V9M3 21H16L18 5.5H1L3 21Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinejoin='round'
        />
    </svg>
);

export default ShopIcon;
