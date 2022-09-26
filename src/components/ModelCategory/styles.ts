import styled, { css } from 'styled-components';

type ContainerModelCategoryProps = {
  isActive: boolean;
};

export const ContainerModelCategory = styled.div<ContainerModelCategoryProps>`
  ${({ theme, isActive }) => css`
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    height: ${isActive ? '300px' : '0px'};
    z-index: 10;
    transition: all 150ms ease-in-out;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 0 20px 0 20px;
    background-color: ${theme.colors.purple_bg};
    overflow: hidden;
  `}
`;

export const ContentModelCategory = styled.div`
  ${({ theme }) => css`
    max-width: 300px;
    display: flex;
    flex-direction: column;

    padding: 5px;
    gap: 10px;

    h2 {
      font-size: 2rem;
      font-weight: ${theme.fonts.lg};
      color: ${theme.colors.lightpurple};
    }

    p {
      color: ${theme.colors.lightpurple};
      font-weight: ${theme.fonts.md};
      font-size: 1.5rem;
      cursor: pointer;
      text-align: center;
      border-bottom: 2px solid transparent;

      transition: all 300ms ease-in-out;
      :hover {
        border-bottom: 2px solid ${theme.colors.text_white};
      }
    }
  `}
`;
