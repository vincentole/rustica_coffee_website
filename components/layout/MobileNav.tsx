import Link from 'next/link';
import { useState } from 'react';
import BurgerMenuClose from '../Icons/BurgerMenuClose';
import ActiveLink from './ActiveLink';

type Props = {
    onClose: () => void;
    isShown: boolean;
};

const MobileNav = ({ onClose, isShown }: Props) => {
    return (
        <div
            className={`md:hidden absolute w-[100%] min-h-[100vh] bg-theme-anthrazit transition-all duration-300 ease-in-out ${
                !isShown && '-translate-x-full'
            }`}
        >
            <div className='cstm-container min-h-[100vh] flex justify-between items-center ml-[20%] sm:ml-[25%]'>
                <nav>
                    <ul className='space-y-[24px] -mt-14'>
                        <li>
                            <ActiveLink href='/' type='mobileNav' onClick={onClose}>
                                Home
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href='/das-cafe' type='mobileNav' onClick={onClose}>
                                das Café
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href='/herkunft' type='mobileNav' onClick={onClose}>
                                Herkunft
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href='/shop' type='mobileNav' onClick={onClose}>
                                Shop
                            </ActiveLink>
                        </li>
                    </ul>
                </nav>
                <div className='self-start'>
                    <div className='spacer-20' />
                    <button
                        onClick={onClose}
                        type='button'
                        aria-label='Navigation schließen'
                        className='p-2 hover:opacity-70'
                    >
                        <BurgerMenuClose className='w-[22px] h-[22px]' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
