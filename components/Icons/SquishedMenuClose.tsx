type Props = {
    className?: string;
};

const SquishedMenuClose = ({ className }: Props) => (
    <svg
        className={className}
        width='22'
        height='14'
        viewBox='0 0 22 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M0.678589 2.13623L10.75 7.24987M20.8214 12.3635L10.75 7.24987M10.75 7.24987L0.678589 12.3635M10.75 7.24987L20.8214 2.13623'
            stroke='currentColor'
            strokeWidth='3'
        />
    </svg>
);
export default SquishedMenuClose;
