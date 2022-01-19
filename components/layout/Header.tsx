import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Cart from '../cart/Cart';
import BurgerMenuOpen from '../Icons/BurgerMenuOpen';
import Logo from '../Icons/Logo';
import CartButton from '../cart/CartButton';
import ActiveLink from '../UI/ActiveLink';
import MobileNav from './MobileNav';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileNavShown, setMobileNavShown] = useState(false);
    const cartShown = useSelector((state: RootState) => state.cart.cartShown);

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
            className={`fixed top-0 left-0 right-0 z-20 transition-colors duration-250 ease-in-out ${
                isScrolled
                    ? 'bg-theme-white text-theme-anthrazit shadow-md '
                    : 'bg-theme-transparent text-theme-white'
            } ${cartShown ? 'pr-[45px]' : ''}`}
        >
            <MobileNav onClose={onMobileNavCloseHandler} isShown={mobileNavShown} />
            <div className='cstm-container-nav h-[55px] flex justify-between items-center xl:max-w-[1280px] xl:mx-auto'>
                <Link href='/'>
                    <a>
                        <Logo className='w-[35px] h-[35px]' />
                    </a>
                </Link>
                <div className='flex gap-[24px] items-center'>
                    <CartButton className='md:hidden'/>
                    <button
                        className='md:hidden p-2'
                        onClick={onMobileNavOpenHandler}
                        type='button'
                        aria-label='Navigation öffnen'
                    >
                        <BurgerMenuOpen className='w-[24px] h-[13px]' />
                    </button>
                </div>

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
                            <CartButton />
                            <Cart />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
