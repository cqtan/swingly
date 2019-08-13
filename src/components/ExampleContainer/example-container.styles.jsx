import styled from 'styled-components';

export const ButtonContainer = styled.div`
  width: 300px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.background.back};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${props => props.theme.palette.text.primary};
`;
ButtonContainer.displayName = 'ButtonContainer';


export const Button = styled.button`
  background-color: ${props => props.theme.background.front};
  color: ${props => props.theme.palette.primary.main};
  padding: 15px;
`;
Button.displayName = 'Button';
