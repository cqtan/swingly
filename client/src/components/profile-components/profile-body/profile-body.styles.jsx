import styled from 'styled-components';
import Button from '../../../ui/button/button.component';
import FormButton from '../../../ui/form-elements/form-button/form-button.component';

export const ProfileBodyContainer = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-wrap: wrap;
`;
ProfileBodyContainer.displayName = 'ProfileBodyContainer';

export const ProfileToggle = styled.div`
  display: flex;
  flex: 1 1 100%;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${props => props.theme.palette.text.secondary};
  border-bottom: 2px solid ${props => props.theme.palette.text.secondary};

  & > button:last-of-type {
    border-left: 1px solid ${props => props.theme.palette.grey[4]}
  }
`;
ProfileToggle.displayName = 'ProfileToggle';

export const ToggleButton = styled(Button)`
  margin: 0;
  flex: 0 1 50%;
  color: ${props => props.isActive ? props.theme.palette.grey[1] : props.theme.palette.text.secondary};
  background-color: ${props => props.isActive ? props.theme.palette.primary.main :  props.theme.background.layer1};
  border-radius: 0;
  box-shadow: none;
`;
ToggleButton.displayName = 'ToggleButton';

export const ProfileButton = styled(FormButton)`
  margin: 4rem auto;
  margin-bottom: 8rem;
`;
ProfileButton.displayName = 'ProfileButton';