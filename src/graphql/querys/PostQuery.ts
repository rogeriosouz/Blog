import { gql } from '@apollo/client';

export const PostQuery = gql`
  query PostQuery($slug: String = "") {
    post(where: { slug: $slug }) {
      id
      title
      author {
        name
        id
        picture {
          url
        }
      }
      content {
        html
      }
      coverImage {
        url
      }
    }
  }
`;
