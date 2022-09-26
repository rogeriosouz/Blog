import { gql } from '@apollo/client';

export const AllCategories = gql`
  query AllCategories {
    categories {
      name
      slug
      id
    }
  }
`;
