const YouTube = () => {
    return (
        <section>
            <div className='cstm-container xl:max-w-[1280px] xl:mx-auto'>
                <iframe
                    className='w-full aspect-video'
                    // width='560'
                    // height='315'
                    src='https://www.youtube.com/embed/IGs33q65b1w?controls=0&amp;start=10'
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
};

export default YouTube;
