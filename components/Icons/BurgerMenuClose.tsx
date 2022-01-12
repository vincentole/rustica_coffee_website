type Props = {
    className: string;
};

const BurgerMenuClose = ({ className }: Props) => (
    <svg
        className={className}
        width='21'
        height='21'
        viewBox='0 0 21 22'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M1.5 2L10.5 11M19.5 20L10.5 11M10.5 11L1.5 20M10.5 11L19.5 2'
            stroke='currentColor'
            strokeWidth='3'
        />
    </svg>
);
export default BurgerMenuClose;
