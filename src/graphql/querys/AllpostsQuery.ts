import { gql } from '@apollo/client';

export const AllpostsQuery = gql`
  query AllpostsQuery {
    posts(orderBy: createdAt_DESC) {
      description
      date
      id
      coverImage {
        url
      }
      slug
      title
    }
  }
`;
