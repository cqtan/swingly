import styled from 'styled-components';
import Button from '../../ui/button/button.component';

export const ProfileContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-wrap: wrap;
  color: ${props => props.theme.palette.text.primary};
`;
ProfileContainer.displayName = 'ProfileContainer';

export const ProfileImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.background.layer2};
  border-bottom: 2px solid ${props => props.theme.palette.text.secondary};
`;
ProfileImageContainer.displayName = 'ProfileImageContainer';

export const ProfileImage = styled.img`
  height: 14rem;
  width: 14rem;
  border: 3px solid ${props => props.theme.palette.text.primary};
  border-radius: 50%;
  object-fit: cover;
`;
ProfileImage.displayName = 'ProfileImage';

export const ProfileDetails = styled.div`
  min-height: 20rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  background-color: ${props => props.theme.background.layer2};
  padding: ${props => props.theme.spacing(2)};
  border-bottom: 2px solid ${props => props.theme.palette.text.secondary};
`;
ProfileDetails.displayName = 'ProfileDetails';

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
`;
ProfileDescription.displayName = 'ProfileDescription';