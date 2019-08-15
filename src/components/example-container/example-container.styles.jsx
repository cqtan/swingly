import styled from 'styled-components';

export const ButtonContainer = styled.div`
  width: 300px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.background.front};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${props => 
    props.theme.type === 'light' ?
    props.theme.shadows[2] :
    props.theme.shadows[0]
  };
  border-radius: 5px;
`;
ButtonContainer.displayName = 'ButtonContainer';


export const Button = styled.button`
  background-color: ${props => props.theme.background.front2};
  color: ${props => props.theme.palette.primary.main};
  padding: 15px;
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadows[2]};
  transition: all .1s ease-in;
  :hover {
    box-shadow: ${props => props.theme.shadows[8]};
  }
`;
Button.displayName = 'Button';
