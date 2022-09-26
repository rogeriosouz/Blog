import styled, { css } from 'styled-components';

type ModalSearchContainerProps = {
  isActive: boolean;
};

export const ModalSearchContainer = styled.div<ModalSearchContainerProps>`
  ${({ theme, isActive }) => css`
    position: absolute;
    top: 100%;
    right: 0;
    width: 80%;
    height: 0px;
    overflow: hidden;
    background-color: ${theme.colors.white};
    z-index: 10;

    transition: all 90ms ease-in-out;

    ${isActive &&
    css`
      height: 500px;
      overflow: auto;
    `}
  `}
`;

export const ContentModalSearc = styled.div`
  ${({ theme }) => css`
    width: 100%;
    cursor: pointer;
    padding: 5px;
    height: 150px;
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    margin-bottom: 1rem;
  `}
`;

export const ContainerBanner = styled.div`
  ${({ theme }) => css`
    width: 40%;
    height: 100%;
    border-radius: 0.8rem;
    overflow: hidden;
    position: relative;

    div {
      width: 100%;
      height: 40%;
      position: absolute;
      top: 60%;
      background-color: #07070794;
      display: flex;

      gap: 2rem;
      align-items: center;
      justify-content: center;

      img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }

      p {
        color: ${theme.colors.text_white};
        font-size: 1.2rem;
        font-weight: ${theme.fonts.md};
      }
    }
  `}
`;

export const BannerSearc = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
  `}
`;

export const TitleSearc = styled.h2`
  ${({ theme }) => css`
    font-size: 2.4rem;
    font-weight: ${theme.fonts.lg};
    color: ${theme.colors.text_black};
  `}
`;

export const ContentTexts = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: 1.6rem;
    font-weight: ${theme.fonts.md};
    color: ${theme.colors.subtitle};
  `}
`;

export const Date = styled.span`
  ${({ theme }) => css`
    font-size: 1.3rem;
    font-weight: ${theme.fonts.sm};
    color: ${theme.colors.subtitle};
  `}
`;
