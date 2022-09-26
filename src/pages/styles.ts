import styled, { css } from 'styled-components';

export const ConteinerHome = styled.section`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.purple_bg};
    min-height: min-content;
    position: relative;
    padding-bottom: 64px;
    margin-bottom: 64px;
  `}
`;

export const ContentHome = styled.div`
  ${({ theme }) => css`
    max-width: 1250px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  `}
`;

export const Textgrup = styled.div`
  ${({ theme }) => css`
    max-width: 570px;
    min-height: min-content;
    display: flex;
    flex-direction: column;

    h1 {
      color: ${theme.colors.button_bg};
      font-weight: ${theme.fonts.lg};
      font-size: 3.6rem;
      margin-bottom: 1.5rem;
    }

    p {
      color: ${theme.colors.lightpurple};
      font-weight: ${theme.fonts.sm};
      font-size: 1.8rem;
      margin-bottom: 2.4rem;
    }

    a {
      color: ${theme.colors.button_bg};
      font-weight: ${theme.fonts.lg};
      font-size: 1.8rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      max-width: max-content;

      border-radius: 4px;
      transition: all 300ms ease-in-out;
      padding: 3px 0;

      &:hover {
        background-color: ${theme.colors.button_bg};
        color: ${theme.colors.white};
        padding: 3px 25px 3px 25px;
      }
    }
  `}
`;

export const FeaturedImg = styled.img`
  ${({ theme }) => css`
    max-width: 570px;
    height: 100%;
    border-radius: 0.8rem;
  `}
`;

export const LineBotom = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 0.6rem;
    position: absolute;
    top: 100%;
    background-color: ${theme.colors.green};
  `}
`;

export const DestaquesPosts = styled.div`
  ${({ theme }) => css`
    max-width: 1250px;
    min-height: min-content;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 63.79px;
  `}
`;

export const PostDestaque = styled.div`
  ${({ theme }) => css`
    max-width: 569px;

    display: flex;
    flex-direction: column;

    gap: 0.8rem;

    h2 {
      font-weight: ${theme.fonts.lg};
      font-size: 2.4rem;
      color: ${theme.colors.text_black};
      cursor: pointer;
    }

    p {
      font-weight: ${theme.fonts.sm};
      font-size: 1.6rem;
      color: ${theme.colors.text_black};
      cursor: pointer;
    }

    span {
      font-weight: ${theme.fonts.sm};
      font-size: 1.6rem;
      color: ${theme.colors.subtitle};
    }

    img {
      width: 100%;
      height: 342px;
      cursor: pointer;
    }
  `}
`;

export const sidePosts = styled.div`
  ${({ theme }) => css`
    max-width: 472px;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    padding-top: 3px;
    gap: 48.55px;

    h2 {
      font-weight: ${theme.fonts.lg};
      font-size: 2.2rem;
      color: ${theme.colors.text_black};
      margin-bottom: 0.8rem;
      cursor: pointer;
    }

    p {
      font-weight: ${theme.fonts.sm};
      font-size: 1.6rem;
      color: ${theme.colors.subtitle};
      cursor: pointer;
    }

    span {
      font-weight: ${theme.fonts.sm};
      font-size: 1.6rem;
      color: ${theme.colors.subtitle};
      margin-bottom: 0.8rem;
      cursor: pointer;
    }
  `}
`;

export const ContainerPosts = styled.section`
  ${({ theme }) => css`
    max-width: 1250px;
    margin: 0 auto;
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
