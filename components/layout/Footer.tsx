import Logo from '../Icons/Logo';
import Address from '../Store/Address';
import OpeningHours from '../Store/OpeningHours';
import InlineLink from '../UI/InlineLink';

const Footer = () => {
    return (
        <footer className='text-theme-white bg-theme-anthrazit theme-text-body-m'>
            <div className='cstm-container'>
                <div className='spacer-lg' />
                <div className='grid grid-cols-[repeat(auto-fit,160px)] justify-center gap-[34px] lg:grid-cols-[repeat(5,160px)] lg:items-center'>
                    <div className='col-span-full lg:col-auto lg:mb-10'>
                        <Logo width='35' height='35' />
                        <div className='spacer-xs' />
                        <h2 className='theme-text-h3-m text-[24px]'>Rustica</h2>
                        <div className='theme-text-subh-m'>Café & Rösterei</div>
                    </div>
                    <div className=''>
                        <Address />
                    </div>
                    <div className=''>
                        <OpeningHours />
                    </div>
                    <div className=''>
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
                    <div className=''>
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
                <div className='spacer-lg' />
            </div>
        </footer>
    );
};

export default Footer;
