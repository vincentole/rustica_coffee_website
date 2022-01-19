type Props = {
    className?: string;
};

const MinusIcon = ({ className }: Props) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
    >
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M20 12H4' />
    </svg>
);
export default MinusIcon;