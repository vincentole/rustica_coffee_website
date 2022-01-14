import Head from 'next/head';

const Impressum = () => {
    return (
        <>
            <Head>
                <title>Rustica</title>
                <meta
                    name='description'
                    content='Kaffee aus Kiel, direkt gehandelt und geröstet in der eigenen Rösterei, serviert im gemütlichen Café in der Innenstadt.'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <div className='spacer-55 bg-theme-anthrazit' />
                <div className='spacer-55 bg-theme-anthrazit' />
                <div className='spacer-55' />
                <div className='cstm-container mx-auto prose lg:prose-xl'>
                    <h2>Imprint & </h2>
                    <h3>address </h3>
                    <address>
                        <div>Campusbusinessbox e.V.</div>
                        <div>Wissenschaftszentrum Kiel Fraunhoferstraße</div>
                        <div>13 24118 Kiel</div>
                    </address>
                    <h2>Privacy Policy</h2>
                    <h3>scope</h3>
                    <p>
                        The privacy policy describes exclusively how Opencampus.sh uses your
                        personal data for services with functions available on Opencampus.sh. It
                        applies exclusively to the Opencampus.sh website. Furthermore, Opencampus.sh
                        accepts no responsibility for the content of external resources. The privacy
                        policy will come into force on October 1, 2011. Changes will be announced by
                        e-mail. Please contact us if you have any questions. You will find details
                        under Responsibility.
                    </p>
                    <h3>personal data</h3>
                    <h3>survey</h3>

                    <p>When you visit opencampus.sh, the web server stores the following data:</p>

                    <ul>
                        <li>IP address</li>
                        <li>Browser type and version</li>
                        <li>the operating system used</li>
                        <li>Date of access</li>
                    </ul>
                    <p>
                        The IP address, browser name and access date are not personal data. A
                        creation of personal user profiles is therefore not possible. Opencampus.sh
                        uses the data exclusively for statistical purposes. They remain on the web
                        server in anonymized or pseudonymized form until they are deleted. It is not
                        passed on to third parties.
                    </p>

                    <p>
                        In order to be able to use our service to the full extent, a cookie is
                        installed on your computer. You will find information about the cookie under
                        Cookies. If you decide to register with stujo.net, the following personal
                        data will be required from you:
                    </p>
                    <ul>
                        <li>first name</li>
                        <li>Last name</li>
                        <li>E-mail address</li>
                    </ul>

                    <p>
                        After a successful registration at Opencampus.sh you have the possibility to
                        voluntarily provide further personal data.
                    </p>

                    <h3>use</h3>
                    <p>
                        Personal data collected during registration is used by Opencampus.sh
                        exclusively for
                    </p>
                    <ul>
                        <li>the offering of own services</li>
                        <li>customer service</li>
                        <li>Customer notifications</li>
                    </ul>
                    <p>
                        The data will not be passed on to third parties. You can find further
                        information under Forwarding.
                    </p>

                    <h3>protection</h3>

                    <p>
                        In order to protect your data, we have taken the necessary technical and
                        organisational security measures to ensure the greatest possible security of
                        your data. We also endeavour to constantly adapt these measures to current
                        circumstances. If you have any questions, please feel free to contact us.
                        You will find details under Responsibility.
                    </p>

                    <h3>cookies</h3>

                    <p>
                        In order to use the functions of Opencampus.sh, a cookie is stored on your
                        computer. The content of this text file does not allow identification with
                        your person. The contents of the cookie are also encrypted. You can prevent
                        cookies from being saved by adjusting your browser settings accordingly. You
                        can also set your browser to accept cookies manually. You can delete
                        accepted cookies at any time. For more information, please contact your
                        browser manufacturer. If you do not accept cookies, this may lead to
                        functional restrictions in the services provided by opencampus.sh.
                    </p>

                    <h3>google analytics</h3>

                    <p>
                        This website uses Google Analytics, a web analysis service of Google Inc.
                        (&quot;Google&quot;). Google Analytics uses &quot;cookies&quot;, which are
                        text files placed on your computer, to help the website analyze how users
                        use the site. The information generated by the cookie about your use of this
                        website is usually transferred to a Google server in the USA and stored
                        there. However, in the event that IP anonymisation is activated on this
                        website, your IP address will be shortened by Google within member states of
                        the European Union or in other contracting states of the Agreement on the
                        European Economic Area beforehand. Only in exceptional cases will the full
                        IP address be transferred to a Google server in the USA and shortened there.
                        On behalf of the operator of this website, Google will use this information
                        to evaluate your use of the website, to compile reports on the website
                        activities and to provide further services to the website operator in
                        connection with the use of the website and the Internet. The IP address
                        transmitted by your browser within the scope of Google Analytics is not
                        merged with other Google data. You may refuse the use of cookies by
                        selecting the appropriate settings on your browser, however please note that
                        if you do this you may not be able to use the full functionality of this
                        website. You can also prevent the collection of data generated by the cookie
                        and related to your use of the website (including your IP address) to Google
                        and the processing of this data by Google by downloading and installing the
                        browser plugin available under the following link Deactivate Google
                        Analytics.
                    </p>

                    <h3>disclosure</h3>

                    <p>
                        Opencampus.sh is obliged to provide information to criminal prosecution or
                        other authorities in response to a request for information in connection
                        with an investigation or on suspicion of a crime, illegal act or other acts.
                    </p>

                    <h3>request for information</h3>

                    <p>
                        Upon request we will provide you with information on all your data. You will
                        find contact details under Responsibility.
                    </p>
                </div>
                <div className='spacer-60' />
            </main>
        </>
    );
};

export default Impressum;
