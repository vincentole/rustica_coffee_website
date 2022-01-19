import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
    href: string;
    isScrolled?: boolean;
    type: 'desktopNav' | 'mobileNav';
    onClick?: () => void;
};

const ActiveLink: React.FC<Props> = ({ children, href, isScrolled, type, onClick }) => {
    const router = useRouter();

    let classes;
    if (type === 'desktopNav') {
        classes = `theme-text-body hover:opacity-70 transition-border-color duration-250 ease-in-out ${
            router.asPath === href ? 'border-none' : 'border-b'
        } ${isScrolled ? 'border-theme-anthrazit' : 'border-theme-white'}`;
    }

    if (type === 'mobileNav') {
        classes = `text-theme-white theme-text-h3-m hover:opacity-70 ${
            router.asPath === href ? 'border-none text-theme-kraftpapier' : 'border-b'
        }`;
    }

    return (
        <Link href={href}>
            <a onClick={onClick} className={classes}>
                {children}
            </a>
        </Link>
    );
};

export default ActiveLink;
