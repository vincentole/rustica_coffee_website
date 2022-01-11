import Logo from "../Icons/Logo";
import Address from "../Store/Address";
import OpeningHours from "../Store/OpeningHours";
import InlineLink from "../UI/InlineLink";

const Footer = () => {
    return (
        <footer className='text-theme-white bg-theme-anthrazit theme-text-body-m'>
            <div className='spacer-lg' />
            <div className='flex flex-wrap gap-[34px]'>
                <div className='cstm-container w-[100%]'>
                    <Logo width='35' height='35' />
                    <div className='spacer-xs' />
                    <h2 className='theme-text-h3-m text-[24px]'>Rustica</h2>
                    <div className='theme-text-subh-m'>Café & Rösterei</div>
                </div>
                <div className='cstm-container w-[45%]'>
                    <Address />
                </div>
                <div className='cstm-container w-[45%]'>
                    <OpeningHours />
                    
                </div>
                <div className='cstm-container w-[45%]'>
                    <nav>
                        <ul>
                            <li>
                                <InlineLink href='#' label='Impressum' />
                            </li>
                            <li>
                                <InlineLink href='#' label='Datenschutz' />
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='cstm-container w-[45%]'>
                    <nav>
                        <ul>
                            <li>
                                <InlineLink href='#' label='Café' />
                            </li>
                            <li>
                                <InlineLink href='#' label='Shop' />
                            </li>
                            <li>
                                <InlineLink href='#' label='Herkunft' />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;