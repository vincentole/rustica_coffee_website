import Logo from '../Icons/Logo';
import Address from '../Store/Address';
import OpeningHours from '../Store/OpeningHours';
import InlineLink from '../UI/InlineLink';

const Footer = () => {
    return (
        <footer className='text-theme-white bg-theme-anthrazit theme-text-body-m'>
            <div className='cstm-container'>
                <div className='spacer-60 lg:spacer-125' />
                <div className='grid grid-cols-[repeat(auto-fit,160px)] justify-center gap-[34px] lg:grid-cols-[repeat(5,160px)] lg:items-center'>
                    <div className='col-span-full lg:col-auto lg:mb-[70px]'>
                        <Logo className='w-[35px] h-[35px] lg:w-[70px] lg:h-[70px]' />
                        <div className='spacer-12' />
                        <h2 className='theme-text-h3-m lg:theme-text-h3 text-[24px]'>Rustica</h2>
                        <div className='theme-text-subh-m'>Café & Rösterei</div>
                    </div>

                    <Address />

                    <OpeningHours />

                    <nav>
                        <ul>
                            <li>
                                <InlineLink href='/impressum' label='Impressum' />
                            </li>
                            <li>
                                <InlineLink href='/impressum' label='Datenschutz' />
                            </li>
                        </ul>
                    </nav>

                    <nav>
                        <ul>
                            <li>
                                <InlineLink href='/das-cafe' label='Café' />
                            </li>
                            <li>
                                <InlineLink href='/herkunft' label='Herkunft' />
                            </li>
                            <li>
                                <InlineLink href='/shop' label='Shop' />
                            </li>
                            <li>
                                <InlineLink href='/kontakt' label='Kontakt' />
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='spacer-60 lg:spacer-125' />
            </div>
        </footer>
    );
};

export default Footer;
