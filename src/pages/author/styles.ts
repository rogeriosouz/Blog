import styled, { css } from 'styled-components';

export const ContainerAuthor = styled.section`
  ${({ theme }) => css`
    max-width: 1250px;
    margin: 0 auto;
    margin-top: 10rem;
  `}
`;

export const ContentAuthor = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: 100px;
    gap: 1.2rem;
    justify-content: center;

    img {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      border: 4px solid ${theme.colors.text_white};
    }

    div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 0.2rem;

      p {
        font-size: 1.4rem;
        font-weight: ${theme.fonts.lg};
        color: ${theme.colors.text_black};
      }

      h1 {
        font-size: 2.5rem;
        font-weight: ${theme.fonts.lg};
        color: ${theme.colors.text_black};
      }

      span {
        font-size: 1.4rem;
        font-weight: ${theme.fonts.lg};
        color: ${theme.colors.text_black};
      }
    }
  `}
`;

export const TitlePosts = styled.h2`
  ${({ theme }) => css`
    font-size: 2.8rem;
    font-weight: ${theme.fonts.lg};
    color: ${theme.colors.text_black};
    margin-bottom: 50px;
    text-align: center;
  `}
`;

export const GridPostAuthor = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  `}
`;

export const AddPostsPagination = styled.div`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    margin-top: 10rem;
    margin-bottom: 10rem;
    button {
      width: max-content;

      padding: 1.2rem;

      height: 40px;
      background-color: ${theme.colors.text_white};
      color: ${theme.colors.purple_bg};
      font-size: 1.3rem;

      border: 1px solid ${theme.colors.text_black};
      transition: all 200ms linear;

      :hover {
        background-color: ${theme.colors.purple_bg};
        color: ${theme.colors.text_white};
      }
    }
  `}
`;
