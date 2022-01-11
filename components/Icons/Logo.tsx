type Props = {
    width: string;
    height: string;
};

const Logo = ({ width = '145', height = '145' }: Props) => (
    <svg
        width={width}
        height={height}
        viewBox='0 0 145 145'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M72.4914 0L0 72.4914L72.4914 144.983L144.983 72.4914L72.4914 0ZM14.7913 72.4914L72.4914 14.7913L130.191 72.4914L72.4914 130.191L14.7913 72.4914Z'
            fill='currentColor'
        />
        <path
            d='M72.4914 28.8414C55.6313 28.8414 40.2883 49.6493 40.2883 72.4914C40.2883 95.3335 55.6313 116.141 72.4914 116.141C89.3515 116.141 104.694 95.3335 104.694 72.4914C104.694 49.6493 89.3515 28.8414 72.4914 28.8414ZM50.7698 72.4914C50.7698 62.4581 54.6487 52.5455 60.1136 46.2014C59.5964 48.4942 59.3205 50.856 59.3205 53.2695C59.3205 61.9237 62.6995 70.0606 68.8022 76.1806C76.8012 84.1796 77.3184 96.8506 70.371 105.453C60.1653 103.539 50.7698 88.1619 50.7698 72.4914ZM84.852 98.8158C87.1965 88.3343 84.3348 76.9219 76.1978 68.7849C68.1988 60.7859 67.6816 48.115 74.6291 39.5125C84.8175 41.4434 94.2302 56.8208 94.2302 72.4914C94.2302 82.5592 90.3341 92.489 84.852 98.8158Z'
            fill='currentColor'
        />
    </svg>
);

export default Logo;
