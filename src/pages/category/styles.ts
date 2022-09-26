import styled, { css } from 'styled-components';

export const ContainerCategory = styled.section`
  ${({ theme }) => css`
    max-width: 1250px;
    margin: 0 auto;
    display: grid;
    margin-top: 10rem;
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
