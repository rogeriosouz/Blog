import styled, { css } from 'styled-components';

export const ContainerPost = styled.section`
  ${({ theme }) => css`
    width: 100%;
    margin: 0 auto;
  `}
`;

export const Banner = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 200px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`;

export const LineBanner = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 4px;
    background-color: ${theme.colors.button_bg};
    position: absolute;
    top: 100%;
  `}
`;

export const ContentPost = styled.div`
  ${({ theme }) => css`
    max-width: 1250px;
    margin: 0 auto;
    min-height: min-content;

    h2 {
      margin: 3rem 0 3rem 0;
      color: ${theme.colors.text_black};
    }

    p {
      font-size: 1.5rem;
      color: ${theme.colors.subtitle};
    }

    a {
      color: blue;

      &:hover {
        text-decoration: underline;
      }
    }

    pre {
      background-color: ${theme.colors.dark_bg};
      border-radius: 0.5rem;
      margin: 1rem 0 1rem 0;
      color: ${theme.colors.text_white};
      padding: 0.5rem;
      margin: 3rem 0 3rem 0;
    }
  `}
`;

export const TitleContent = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    font-size: 3rem;
    margin-bottom: 40px;
    color: ${theme.colors.text_black};
  `}
`;

export const AuthorContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: min-content;
    margin-top: 20px;
    margin-bottom: 50px;
    color: ${theme.colors.text_black};

    a {
      p {
        font-size: 2rem;
        font-weight: ${theme.fonts.lg};
        color: ${theme.colors.text_black};
      }

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.2rem;

      img {
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
      }
    }
  `}
`;
