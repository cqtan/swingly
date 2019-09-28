import styled, { css } from 'styled-components';

const chooseColor = props => {
  const { secondary, disabled, transparent, deleteStyle, theme } = props;
  if (disabled) {
    return theme.buttons.disabled.bg;
  } else if (transparent) {
    return `transparent`;
  } else if (secondary) {
    return theme.palette.secondary.main;
  } else if (deleteStyle) {
    return theme.palette.error;
  } else {
    return theme.palette.primary.main;
  }
}

const defaultButton = css`
  box-shadow: ${props => props.theme.shadows[2]};
  border-radius: 0.5rem;

  @media (hover: hover) {
    :hover {
      box-shadow: ${props => !props.disabled && props.theme.shadows[8]};
    }
  }

  :active {
    box-shadow: ${({ theme }) => theme.shadows[4]};
  }
`;

const flatButton = css`
  border-radius: 0;
`;

const outlinedButton = css`
  background-color: ${props => props.theme.background.layer1};
  border: ${props => props.deleteStyle ? `1px solid ${props.theme.palette.error}` : `1px solid ${props.theme.palette.primary.main}`};
  color: ${props => props.theme.type === "light" ? props.theme.palette.grey[1] : props.theme.palette.primary.main};
  ${props => props.deleteStyle && css`
    color: ${props.theme.palette.error};
  `};
`;

export const CustomButton = styled.button`
  display: flex;
  width: ${props => props.stretch ? `100%` : `auto`};
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing(1)};
  margin: ${props => props.theme.spacing(1)};
  background-color: ${chooseColor};
  ${props => props.theme.typo.button};
  transition: all .2s ease-out;
  ${props => props.flat ? flatButton : defaultButton};
  ${props => props.outlined && outlinedButton};

  @media (hover: hover) {
    :hover {
      filter: ${props => !props.disabled && `brightness(120%)`};
      ${props => props.outlined && props.theme.type === "light" && css`
        color: ${props => props.deleteStyle ? props.theme.palette.error : props.theme.palette.grey[1]};
      `}
    }
  }
`;
CustomButton.displayName = 'CustomButton';


