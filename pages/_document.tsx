import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }

    render() {
        return (
            <Html style={{ overflowY: 'scroll' }}>
                <Head>
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link
                        rel='preconnect'
                        href='https://fonts.gstatic.com'
                        crossOrigin='anonymous'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap'
                        rel='stylesheet'
                        crossOrigin='anonymous'
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
