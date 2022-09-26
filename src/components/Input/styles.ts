import styled, { css } from 'styled-components';

export const InputContainer = styled.input`
  ${({ theme }) => css`
    width: 300px;
    height: 100%;
    background-color: ${theme.colors.dark_bg};
    padding: 1.4rem 2.5rem;
    font-size: 1.4rem;
    font-weight: ${theme.fonts.sm};
    color: ${theme.colors.text_white} !important;
    border-radius: 0.2rem;
    position: relative;
    color: #0f0;

    ::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }

    ::placeholder {
      color: ${theme.colors.text_white};
    }
  `}
`;
