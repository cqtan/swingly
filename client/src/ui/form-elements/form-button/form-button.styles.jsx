import styled from 'styled-components';
import Button from '../../button/button.component';

export const FormButtonContainer = styled(Button)`
  min-width: 12rem;
  margin: 1rem 0;
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};
  ${props => props.theme.typo.button};

  & > svg {
    font-size: 2rem;
    margin-right: 1rem;
  }
`;
FormButtonContainer.displayName = 'FormButtonContainer';