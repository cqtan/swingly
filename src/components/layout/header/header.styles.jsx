import styled from 'styled-components';
import Button from '../../ui/button/button.component';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  background-color: ${({ theme }) => theme.palette.primary.main };
  box-shadow: ${({ theme }) => theme.shadows[2]};
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
HeaderContainer.displayName = 'HeaderContainer';

export const HeaderButtons = styled(Button)`
  border-radius: 50%;
  @media(hover: hover) {
    :hover {
      background-color: rgba(255, 255, 255, 0.4);
    }
  }
`;

export const Logo = styled.div`
  ${({ theme }) => theme.typo.h3 };
  box-shadow: ${({ theme }) => theme.shadows[2]};
`;