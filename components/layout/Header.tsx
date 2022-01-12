import BurgerMenuOpen from '../Icons/BurgerMenuOpen';
import Logo from '../Icons/Logo';
import InlineLink from '../UI/InlineLink';

const Header = () => {
    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-theme-transparent '>
            <div className='cstm-container h-[55px] flex justify-between items-center text-theme-white'>
                <Logo className='w-[35px] h-[35px] md:w-[70px] md:h-[70px]' />
                <BurgerMenuOpen className='w-[24px] h-[13px]' />
            </div>
        </header>
    );
};

export default Header;
