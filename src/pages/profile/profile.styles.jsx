import styled from 'styled-components';
import Button from '../../ui/button/button.component';

export const ProfileContainer = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-wrap: wrap;
  color: ${props => props.theme.palette.text.primary};

  div:not(:last-of-type) {
    border-bottom: 2px solid ${props => props.theme.palette.text.secondary};
  }
`;
ProfileContainer.displayName = 'ProfileContainer';

export const ProfileImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.background.layer2};
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
  height: 20rem;
  width: 100%;
  display: flex;
  align-items: flex-start;
  background-color: ${props => props.theme.background.layer2};
  padding: ${props => props.theme.spacing(2)};
`;
ProfileDetails.displayName = 'ProfileDetails';

export const ProfileLabel = styled.div`
  ${props => props.theme.typo.h5};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;


`;
ProfileLabel.displayName = 'ProfileLabel';

export const ProfileButton = styled(Button)`
  margin: 0;
  height: min-content;
  border-radius: 50%;
  padding: 1rem;
  color: ${props => props.theme.palette.text.secondary};
`;
ProfileButton.displayName = 'ProfileButton';
