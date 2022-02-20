import { GraphQLClient, RequestDocument } from 'graphql-request';

const endpoint = 'https://api-eu-central-1.graphcms.com/v2/ckze6y9my27k901xrcsp88ao7/master';
const graphcms = new GraphQLClient(endpoint, {
    headers: {
        authorization: `Bearer ${process.env.GRAPHQL_CMS_ACCESS_TOKEN}`,
    },
});

async function graphcmsRequest<T>(query: RequestDocument) {
    const data = await graphcms.request<T>(query);
    return data;
}

export { graphcmsRequest };
