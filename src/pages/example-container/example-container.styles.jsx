import styled from 'styled-components';

export const ExampleButtonContainer = styled.div`
  width: 300px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.background.layer2};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${props => 
    props.theme.type === 'light' ?
    props.theme.shadows[2] :
    props.theme.shadows[0]
  };
  border-radius: 5px;
  transition: all .2s ease-out;
`;
ExampleButtonContainer.displayName = 'ExampleButtonContainer';

