import { gql } from 'graphql-request';

export const shopItemsQuery = () => gql`
    query MyQuery {
        products {
            id
            slug
            title
            allPrices
            image {
                url
            }
        }
    }
`;

export const shopItemsDetailsQuery = () => gql`
    query MyQuery {
        products {
            id
            slug
            title
            allPrices
            aroma
            cookingUtilities
            allVariants
            allWeights
            summary
            description
            image {
                url
            }
        }
    }
`;

export const shopItemsAllSlugsQuery = () => gql`
    query MyQuery {
        products {
            id
            slug
        }
    }
`;

export const shopItemBySlugQuery = (slug: string) => gql`
query MyQuery {
  products(where: {slug: "${slug}"}) {
    id
    slug
    title
    allPrices
    aroma
    cookingUtilities
    allVariants
    allWeights
    summary
    description
    image {
      url
    }
  }
}
`;
