import styled, { css } from 'styled-components';

export const ContainerPostCard = styled.div`
  ${({ theme }) => css`
    max-width: 370px;
    min-height: min-content;
    display: flex;
    flex-direction: column;
  `}
`;

export const ImgBaner = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 259px;
    border-radius: 0.8rem;
    margin-bottom: 1.4rem;
    cursor: pointer;
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 2.4rem;
    font-weight: ${theme.fonts.lg};
    color: ${theme.colors.text_black};
    margin-bottom: 0.8rem;
    cursor: pointer;
  `}
`;

export const Date = styled.span`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-weight: ${theme.fonts.sm};
    color: ${theme.colors.subtitle};
    margin-bottom: 0.8rem;
  `}
`;

export const SubTitle = styled.p`
  ${({ theme }) => css`
    font-size: 1.4rem;
    font-weight: ${theme.fonts.sm};
    color: ${theme.colors.text_black};
    cursor: pointer;
  `}
`;
