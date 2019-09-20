import styled from 'styled-components';
import FormButton from '../../ui/form-elements/form-button/form-button.component';

export const ProfileContainer = styled.div`
  margin-top: ${props => props.theme.layout.header.height};
  display: flex;
  flex-wrap: wrap;
  color: ${props => props.theme.palette.text.primary};
`;
ProfileContainer.displayName = 'ProfileContainer';

export const ProfileButton = styled(FormButton)`
  margin: 0 auto;
  margin-bottom: 5rem;
`;
ProfileButton.displayName = 'ProfileButton';