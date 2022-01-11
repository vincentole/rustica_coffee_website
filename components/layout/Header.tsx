import BurgerMenuOpen from '../Icons/BurgerMenuOpen';
import Logo from '../Icons/Logo';
import InlineLink from '../UI/InlineLink';

const Header = () => {
    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-theme-transparent '>
            <div className='cstm-container h-[55px] flex justify-between items-center text-theme-white'>
                <Logo width='35' height='35' />
                <BurgerMenuOpen width='24' height='13' />
            </div>
        </header>
    );
};

export default Header;
