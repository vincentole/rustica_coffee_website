import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { GraphQLClient } from 'graphql-request';

import HeroSectionTxtCta from '../components/layout/HeroSectionTxtCta';
import InfoSectionImgRight from '../components/layout/InfoSectionImgRight';
import InfoSectionImgLeft from '../components/layout/InfoSectionImgLeft';
import ShopSectionTopProducts from '../components/Shop/ShopSectionTopProducts';
import OriginSection from '../components/layout/OriginSection';
import FeaturesSection from '../components/layout/FeaturesSection';
import MapSection from '../components/layout/MapSection';

import shopImage from '../public/img/FEND-Coffee-shop.png';
import plantImage from '../public/img/FEND-coffee-plant.png';

import TopProductsType from '../types/topProductType';

type HomeProps = {
    products: TopProductsType;
};

const Home: NextPage<HomeProps> = ({ products }) => {
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
                {/* hero section */}
                <HeroSectionTxtCta />
                <div className='spacer-60 lg:spacer-125' />

                {/* the caffee section */}
                <InfoSectionImgRight
                    img={shopImage}
                    alt='our store with people enjoing our products'
                />
                <div className='spacer-40 lg:spacer-125' />

                {/* organic section */}
                <InfoSectionImgLeft img={plantImage} alt='coffee plant' />
                <div className='spacer-60 lg:spacer-125' />

                {/* shop section */}
                <ShopSectionTopProducts products={products} />

                {/* origin section */}
                <OriginSection />
                <div className='spacer-60 lg:spacer-125' />

                {/* features section */}
                <FeaturesSection />
                <div className='spacer-60 lg:spacer-125' />

                {/* map section */}
                <MapSection />
            </main>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const endpoint = 'https://api-eu-central-1.graphcms.com/v2/ckze6y9my27k901xrcsp88ao7/master';
    const graphcms = new GraphQLClient(endpoint, {
        headers: {
            authorization: `Bearer ${process.env.GRAPHQL_CMS_ACCESS_TOKEN}`,
        },
    });
    const { products } = await graphcms.request(
        `
            query MyQuery {
                products {
                    slug
                    title
                    allPrices
                }
            }
        `,
    );

    return {
        props: {
            products,
        },
    };
};

export default Home;
