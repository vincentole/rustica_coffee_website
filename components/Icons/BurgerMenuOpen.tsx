type Props = {
    width: string;
    height: string;
};

const BurgerMenuOpen = ({ width = '21', height = '22' }: Props) => (
    <svg width='24' height='16' viewBox='0 0 24 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M0 2H23.5M0 8H23.5M0 14.5H16.5' stroke='currentColor' strokeWidth='3' />
    </svg>
);

export default BurgerMenuOpen;
