import styled from 'styled-components';
import Button from '../../ui/button/button.component';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${props => props.theme.layout.header.height};
  background-color: ${({ theme }) => theme.palette.primary.main };
  box-shadow: ${({ theme }) => theme.shadows[2]};
  z-index: 300;

  button:first-of-type {
    font-size: 2rem;
    margin-left: ${props => props.theme.spacing(3)};
    justify-content: flex-start;
  }

  button:last-of-type {
    margin-right: ${props => props.theme.spacing(3)};
    justify-content: flex-end;
  }

`;
HeaderContainer.displayName = 'HeaderContainer';

export const HeaderButtons = styled(Button)`
  flex: 0 1 7rem;
  align-items: center;
  padding: 0;
  height: 4rem;
  border-radius: 0;
  margin: 0;
  box-shadow: none;

  @media (hover: hover) {
    :hover {
      background-color: none;
      box-shadow: none;
      filter: none;
    }
  }

  :active {
    box-shadow: none;
  }
`;
HeaderButtons.displayName = 'HeaderButtons';

export const ButtonText = styled.div`
  padding-left: ${props => props.theme.spacing(1)};
  ${props => props.theme.typo.body};

`;
ButtonText.displayName = 'ButtonText';

export const Logo = styled(Link)`
  flex: 0 1 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: none;
  margin: 0;
  ${({ theme }) => theme.typo.h3 };
  font-family: 'Oleo Script', 'Open Sans', sans-serif; 
  color: ${props => props.theme.palette.grey[0]};
`;
Logo.displayName = 'Logo';