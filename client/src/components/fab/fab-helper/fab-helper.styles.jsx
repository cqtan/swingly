import styled, { css } from 'styled-components';
import { ContentColumn } from '../../../pages/about-page/about-page.styles';

export const FabHelperContainer = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.absCentered};
    ${theme.typo.subtitle};
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1rem;
    color: ${theme.palette.text.primary};
    width: 32rem;
    background-color: ${theme.background.layer2};
    border-radius: 5px;
    z-index: 600;
    padding-bottom: 2rem;
  `}
`;
FabHelperContainer.displayName = 'FabHelperContainer';

export const HelperContentRow = styled(ContentColumn)`
  ${({ theme }) => css`
    flex-wrap: nowrap;
    flex: 1 1 100%;
    ${theme.typo.subtitle};
  `}
`;
HelperContentRow.displayName = "HelperContentRow";
