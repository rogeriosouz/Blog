import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl5drt0tp08ym01uhadyvav6e/master',
  cache: new InMemoryCache(),
});

export default client;
