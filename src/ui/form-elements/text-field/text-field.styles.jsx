import styled, { css } from 'styled-components';

const shrinkLabel = css`
  top: -1.5rem;
  color: ${props => props.error ? 
    props.theme.palette.error : 
    props.theme.palette.primary.main
  };
  font-size: ${props => props.theme.typo.subtitle};
`;

export const TextFieldContainer = styled.div`
  position: relative;
  margin: 1.5rem 0;
`;
TextFieldContainer.displayName = 'TextFieldContainer';

export const TextFieldLabel = styled.label`
  position: absolute;
  top: 1rem;
  ${props => props.theme.typo.body};
  color: ${props => props.error ? 
    props.theme.palette.error : 
    props.theme.palette.text.secondary
  };
  transition: all .2s ease-out;
  pointer-events: none;

  ${props => props.value && shrinkLabel};
`;
TextFieldLabel.displayName = 'TextFieldLabel';

export const TextFieldInput = styled.input`
  background-color: transparent;
  width: 100%;
  font-size: 1.8rem;
  display: block;
  margin: 2.5rem 0 0.2rem 0;
  border: none;
  border-radius: 0px;
  border-bottom: 1px solid ${props => props.error ? 
    props.theme.palette.error : 
    props.theme.palette.text.primary
  };
  color: ${props => props.theme.palette.text.primary};
  padding: 1rem 0;
  letter-spacing: ${props => props.type === 'password' && `0.3rem`};

  &:focus {
    ~ ${TextFieldLabel} {
      ${shrinkLabel};
    }
    border-bottom: 1px solid ${props => props.theme.palette.primary.main};
  }

  ~ ${TextFieldLabel} {
    ${props => props.value && shrinkLabel};
  }
`;
TextFieldContainer.displayName = 'TextFieldContainer';

export const TextAreaInput = styled.textarea`
  background-color: transparent;
  min-height: 10rem;
  width: 100%;
  font-size: 1.8rem;
  display: block;
  margin: 2.5rem 0 0.2rem 0;
  border: none;
  border-radius: 0px;
  border-bottom: 1px solid ${props => props.error ? 
    props.theme.palette.error : 
    props.theme.palette.text.primary
  };
  color: ${props => props.theme.palette.text.primary};
  padding: 1rem 0;
  letter-spacing: ${props => props.type === 'password' && `0.3rem`};

  &:focus {
    ~ ${TextFieldLabel} {
      ${shrinkLabel};
    }
    border-bottom: 1px solid ${props => props.theme.palette.primary.main};
  }

  ~ ${TextFieldLabel} {
    ${props => props.value && shrinkLabel};
  }
`;
TextAreaInput.displayName = 'TextAreaInput';

export const HelperText = styled.div`
  width: 100%;
  ${props => props.theme.typo.subtitle};
  color: ${props => props.theme.palette.error};
`;
HelperText.displayName = 'HelperText';

