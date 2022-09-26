import { gql } from '@apollo/client';

export const SearchPostsQuery = gql`
  query SearchPosts($title_contains: String = "") {
    posts(where: { title_contains: $title_contains }) {
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
        picture {
          url
        }
      }
    }
  }
`;
