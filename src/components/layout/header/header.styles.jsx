import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.palette.primary.main };
  box-shadow: ${({ theme }) => theme.shadows[2]};
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
HeaderContainer.displayName = 'HeaderContainer';

export const Logo = styled.div`
  ${({ theme }) => theme.typo.h3 };
  box-shadow: ${({ theme }) => theme.shadows[2]};
`;