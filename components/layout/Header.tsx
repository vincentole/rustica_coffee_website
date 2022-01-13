import Link from 'next/link';
import { useEffect, useState } from 'react';
import BurgerMenuOpen from '../Icons/BurgerMenuOpen';
import Logo from '../Icons/Logo';
import ShopIcon from '../Icons/ShopIcon';
import ActiveLink from './ActiveLink';
import MobileNav from './MobileNav';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileNavShown, setMobileNavShown] = useState(false);

    // Mobile nav menu
    useEffect(() => {
        // close nav when moving from mobile to desktop media query
        const mdMediaQuery = window.matchMedia('(min-width:768px)');
        const handleMQChange = (e: MediaQueryListEvent) => {
            if (e.matches) setMobileNavShown(false);
        };

        mdMediaQuery.addEventListener('change', handleMQChange);

        return () => {
            mdMediaQuery.removeEventListener('change', handleMQChange);
        };
    }, []);

    const onMobileNavCloseHandler = () => {
        setMobileNavShown(false);
    };

    const onMobileNavOpenHandler = () => {
        setMobileNavShown(true);
    };

    // Navbar
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
                    ? 'bg-theme-white text-theme-anthrazit shadow-md '
                    : 'bg-theme-transparent text-theme-white'
            } `}
        >
            <MobileNav onClose={onMobileNavCloseHandler} isShown={mobileNavShown} />
            <div className='cstm-container-nav h-[55px] flex justify-between items-center xl:max-w-[1280px] xl:mx-auto'>
                <Link href='/'>
                    <a>
                        <Logo className='w-[35px] h-[35px]' />
                    </a>
                </Link>

                <button
                    className='md:hidden p-2'
                    onClick={onMobileNavOpenHandler}
                    type='button'
                    aria-label='Open Mobile Navigation'
                >
                    <BurgerMenuOpen className='w-[24px] h-[13px]' />
                </button>
                <nav className='hidden md:inline-block'>
                    <ul className='flex gap-[60px] items-center'>
                        <li>
                            <ActiveLink type='desktopNav' href='/' isScrolled={isScrolled}>
                                Home
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink type='desktopNav' href='/das-cafe' isScrolled={isScrolled}>
                                das Café
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink type='desktopNav' href='/herkunft' isScrolled={isScrolled}>
                                Herkunft
                            </ActiveLink>
                        </li>
                        <li className='space-x-[30px] flex items-center'>
                            <ActiveLink type='desktopNav' href='/shop' isScrolled={isScrolled}>
                                Shop
                            </ActiveLink>
                            <button type='button' aria-label='open your shopping cart'>
                                <ShopIcon className='w-[17px] h-[20px]' />
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
