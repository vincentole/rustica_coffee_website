import Link from 'next/link';

type PropsLink = {
    label: string;
    secondary?: boolean;
    borderWhite?: boolean;

    type: 'link';
    href: string;
};

type PropsAnchor = {
    label: string;
    secondary?: boolean;
    borderWhite?: boolean;

    type: 'anchor';
    anchorId: string;
};

type PropsButton = {
    secondary?: boolean;
    borderWhite?: boolean;

    type: 'button';
    btnType: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: () => void;
};

type Props = PropsLink | PropsAnchor | PropsButton;

const Button: React.FC<Props> = (props) => {
    const { type, secondary, borderWhite } = props;

    const baseStyle = `py-3 px-12 rounded-[5px] border-[3px] ${
        borderWhite ? 'border-theme-white' : 'border-theme-anthrazit'
    }`;
    const variantStyle = secondary
        ? 'bg-theme-white text-black hover:bg-theme-anthrazit hover:text-white active:text-white active:bg-theme-kraftpapier active:border-theme-kraftpapier'
        : 'bg-theme-anthrazit text-theme-white hover:bg-theme-hover-gray hover:border-theme-hover-gray active:bg-theme-kraftpapier active:border-theme-kraftpapier';

    if (type === 'anchor') {
        return (
            <a href={props.anchorId} className={`${baseStyle} ${variantStyle}`}>
                {props.label}
            </a>
        );
    }

    if (type === 'link') {
        return (
            <Link href={props.href}>
                <a className={`${baseStyle} ${variantStyle}`}>{props.label}</a>
            </Link>
        );
    }

    if (type === 'button') {
        return (
            <button type={props.btnType} disabled={props.disabled ? props.disabled : false} className={`${baseStyle} ${variantStyle}`}>
                {props.children}
            </button>
        );
    }

    return <div className='bg-red-600 text-white p-2'>Specify the type prop.</div>;
};

export default Button;
