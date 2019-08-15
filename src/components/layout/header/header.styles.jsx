import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.palette.primary.main };
`;
HeaderContainer.displayName = 'HeaderContainer';