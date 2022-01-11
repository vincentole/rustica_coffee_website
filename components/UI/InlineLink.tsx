import Link from 'next/link';

type Props = {
    href: string;
    label: string;
};

const InlineLink = ({ href, label }: Props) => {
    return (
        <Link href={href}>
            <a className='theme-text-body-m'>{label}</a>
        </Link>
    );
};

export default InlineLink;
