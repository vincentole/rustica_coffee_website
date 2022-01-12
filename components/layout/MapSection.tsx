const MapSection = () => {
    return (
        <section>
            <div className='cstm-container xl:max-w-[1280px] xl:mx-auto'>
                <div className='spacer-12' />
                <h2 className='theme-text-h2-m lg:theme-text-h2'>Komm vorbei</h2>
                <div className='spacer-35' />
            </div>
            <iframe
                className='w-full h-[230px] lg:h-[485px]'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2325.855703782809!2d10.119832115979134!3d54.341858507377374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b2560c505797eb%3A0xf549da0f074162a9!2sFraunhoferstra%C3%9Fe%2013%2C%2024118%20Kiel!5e0!3m2!1sen!2sde!4v1641925286002!5m2!1sen!2sde'
                frameBorder={0}
                loading='lazy'
                allowFullScreen
            ></iframe>
        </section>
    );
};

export default MapSection;
