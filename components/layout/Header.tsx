import { useCallback, useEffect, useState } from 'react';
import BurgerMenuOpen from '../Icons/BurgerMenuOpen';
import Logo from '../Icons/Logo';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScrollHandler = () => {
            if (window.scrollY < 55 && isScrolled) setIsScrolled(false);
            if (window.scrollY > 55 && !isScrolled) setIsScrolled(true);
        };

        window.addEventListener('scroll', onScrollHandler);

        return () => window.removeEventListener('scroll', onScrollHandler);
    }, [isScrolled]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ease-in-out ${
                isScrolled
                    ? 'bg-theme-white text-theme-anthrazit shadow-md'
                    : 'bg-theme-transparent text-theme-white'
            } `}
        >
            <div className='cstm-container h-[55px] flex justify-between items-center xl:max-w-[1280px] xl:mx-auto'>
                <Logo className='w-[35px] h-[35px]' />
                <BurgerMenuOpen className='w-[24px] h-[13px]' />
            </div>
        </header>
    );
};

export default Header;
