import styled from 'styled-components';
import Button from '../../../ui/button/button.component';

export const ProfileDetailsContainer = styled.div`
  min-height: 20rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: ${props => props.theme.spacing(2)};
  border-bottom: 2px solid ${props => props.theme.palette.text.secondary};
`;
ProfileDetailsContainer.displayName = 'ProfileDetailsContainer';

export const ProfileButton = styled(Button)`
  margin: 0;
  height: min-content;
  border-radius: 50%;
  padding: 1rem;
  color: ${props => props.theme.palette.text.secondary};
`;
ProfileButton.displayName = 'ProfileButton';

export const ProfileRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;`;
ProfileRow.displayName = 'ProfileRow';

export const ProfileTitle = styled(ProfileRow)`
  ${props => props.theme.typo.h5};
  justify-content: space-between;
  align-items: center;
`;
ProfileTitle.displayName = 'ProfileTitle';

export const ProfileLabel = styled.div`
  ${props => props.theme.typo.body};
  width: 10rem;
  color: ${props => props.theme.palette.text.secondary};
`;
ProfileLabel.displayName = 'ProfileLabel';

export const ProfileData = styled.div`
  ${props => props.theme.typo.body};
  color: ${props => props.theme.palette.text.primary};
`;
ProfileData.displayName = 'ProfileData';

export const ProfileDescription = styled(ProfileData)`
  margin-top: ${props => props.theme.spacing(1)};
  padding: ${props => props.theme.spacing(1)};
  ${props => props.theme.mixins.defaultBorderRadius};
  background-color: ${props => props.theme.background.layer3};
  width: 100%;

  font-size: 1.2rem;
`;
ProfileDescription.displayName = 'ProfileDescription';