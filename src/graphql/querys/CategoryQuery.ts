import { gql } from '@apollo/client';

export const CategoryQuery = gql`
  query CategoryQuery($slug: String = "") {
    category(where: { slug: $slug }) {
      posts {
        id
        title
        description
        slug
        date
        author {
          name
        }
        coverImage {
          url
        }
      }
    }
  }
`;
