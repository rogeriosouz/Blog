import { gql } from '@apollo/client';

export const AuthorQuery = gql`
  query AuthorQuery($id: ID = "") {
    author(where: { id: $id }) {
      biography
      name
      picture {
        url
      }
      posts {
        id
        title
        slug
        date
        description
        coverImage {
          url
        }
        author {
          name
        }
      }
    }
  }
`;
