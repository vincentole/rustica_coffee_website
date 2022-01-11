import Link from "next/link";

type Props = {
    label: string;
    link?: boolean;
    href?: string;
    anchor?: boolean;
    anchorId?: string;
    secondary?: boolean;
    borderWhite?: boolean;
};

const Button = ({ label, link, href, anchor, anchorId, secondary, borderWhite }: Props) => {
    const baseStyle = `py-3 px-12 rounded-[5px] border-[3px] ${
        borderWhite ? 'border-theme-white' : 'border-theme-anthrazit'
    }`;
    const variantStyle = secondary
        ? 'bg-theme-white text-black hover:bg-theme-anthrazit hover:text-white active:text-white active:bg-theme-kraftpapier'
        : 'bg-theme-anthrazit text-theme-white hover:bg-theme-medium-gray active:bg-theme-kraftpapier';

    if (anchor) {
        return (
            <a href={anchorId} className={`${baseStyle} ${variantStyle}`}>
                {label}
            </a>
        );
    }

    if (link) {
        return (
            <Link href={href!}>
                <a className={`${baseStyle} ${variantStyle}`}>{label}</a>
            </Link>
        );
    }

    return <div>specify anchor or link</div>;
};

export default Button;
