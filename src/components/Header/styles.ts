import styled, { css } from 'styled-components';

export const ContainerHeader = styled.header`
  ${({ theme }) => css`
    width: 100%;
    padding-top: 6.4rem;
    background-color: ${theme.colors.purple_bg};
    padding-bottom: 64px;
    position: relative;
  `}
`;

export const ContentHeader = styled.div`
  ${({ theme }) => css`
    max-width: 1250px;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    position: relative;
  `}
`;

export const Logo = styled.h1`
  ${({ theme }) => css`
    font-size: 3rem;
    font-weight: ${theme.fonts.lg};
    color: ${theme.colors.text_white};
  `}
`;

type LinkNavigationProps = {
  isClick: boolean;
};

export const Navigation = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 3.2rem;
  `}
`;

export const LinkNavigation = styled.a<LinkNavigationProps>`
  ${({ theme, isClick }) => css`
    font-size: 1.8rem;
    font-weight: ${theme.fonts.lg};
    color: ${theme.colors.text_white};
    padding: 1px 4px;

    transition: all 300ms ease-in-out;
    border-bottom: 3px solid ${theme.colors.purple_bg};

    ${isClick &&
    css`
      border-bottom: 3px solid ${theme.colors.purple_bg};
    `}

    &:hover {
      border-bottom: 3px solid ${theme.colors.green};
    }
  `}
`;

type DarkModeProps = {
  clickDarkMode: boolean;
};
export const DarkMode = styled.div<DarkModeProps>`
  ${({ theme, clickDarkMode }) => css`
    position: absolute;
    bottom: 80%;
    padding: 0.2rem;
    margin-top: 35px;
    width: 100%;

    div {
      max-width: 1250px;
      margin: 0 auto;
      display: flex;
      justify-content: flex-end;
      padding-right: 2px;
      align-items: center;
      gap: 1rem;

      p {
        font-size: 1.5rem;
        color: ${theme.colors.text_white};
      }

      div {
        width: 40px;
        margin: 0;
        margin-top: 0.2rem;

        height: 20px;
        background-color: ${clickDarkMode ? '#fff' : '#000'};
        border-radius: 20px;
        position: relative;
        cursor: pointer;
        border: 2px solid ${clickDarkMode ? '#000' : '#fff'};

        button {
          width: 30%;
          height: 10px;
          border-radius: 50%;
          position: absolute;

          transition: all 150ms ease-in-out;
          background-color: ${clickDarkMode ? '#000' : '#fff'};

          left: ${clickDarkMode ? 'calc(40px - 17px)' : '3px'};
        }
      }
    }
  `}
`;
