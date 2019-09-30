import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const AboutPageContainer = styled.div`
  ${({ theme }) => css`
    flex-wrap: wrap;
    display: flex;
    justify-content: center
    margin-top: 6rem;
    color: ${theme.palette.text.primary};
  `}
`;
AboutPageContainer.displayName = 'AboutPageContainer';

export const ContentContainer = styled.div`
  flex: 0 1 90%;
  max-width: 52rem;
`;
ContentContainer.displayName = 'ContentContainer';

export const H1 = styled.div`
  ${({ theme }) => css`
    ${theme.typo.h2};
    flex: 0 1 100%;
    text-align: center;
    margin: 2rem auto;
    margin-top: 4rem;
  `}
`;
H1.displayName = 'H1';

export const H2 = styled.div`
  ${({ theme }) => css`
   ${theme.typo.h3};
   flex: 0 1 100%;
   text-align: center;
   margin: 1rem auto;
   margin-top: 2rem;
  `}
`;
H2.displayName = 'H2';

export const H3 = styled.div`
  ${({ theme }) => css`
    ${theme.typo.h5};
    flex: 0 1 100%;
    margin: 1rem auto;
    margin-top: 2rem;
  `}
`;
H3.displayName = 'H3';

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    ${theme.typo.body};
    flex: 1 1 100%;

    a {
      color: ${theme.palette.primary.dark};
    }
  `}
`;
Content.displayName = 'Content';

export const ContentRow = styled.div`
  flex: 1 1 100%;
  margin: 1rem auto;
`;
ContentRow.displayName = 'ContentRow';

export const ContentColumn = styled.div`
  flex: 0 1 95%;
`;
ContentColumn.displayName = 'ContentColumn';

export const Icon = styled(FontAwesomeIcon)`
  ${({ theme }) => css`
    flex: 0 1 5%;
    margin: 0.5rem auto;
  `}
`;
Icon.displayName = 'Icon';

export const AboutButtonContainer = styled.a`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
  `}
`;
AboutButtonContainer.displayName = 'AboutButtonContainer';