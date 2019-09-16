import styled from 'styled-components';

export const Label = styled.label`
  position: absolute;
  top: -1.5rem;
  color: ${props => props.error ? 
    props.theme.palette.error : 
    props.theme.palette.primary.main
  };
  font-size: ${props => props.theme.typo.subtitle};
  pointer-events: none;
`;
Label.displayName = 'Label';


export const DateTimeFieldContainer = styled.div`
  position: relative;
  margin: 2.5rem 0 1.5rem 0;
  display:  flex;
  flex-wrap: wrap;

  > div {
    width: 100%;
  }

  input {
    display: block;
    width: 100%;
    font-size: 1.8rem;
    margin-bottom: 0.2rem;
    border-bottom: 1px solid ${props => props.error ? 
      props.theme.palette.error : 
      props.theme.palette.text.primary
    };
    color: ${props => props.theme.palette.text.primary};
    letter-spacing: ${props => props.type === 'password' && `0.3rem`};
    padding: 1rem 0;
  }

  .MuiInput-underline:before,
  .MuiInput-underline:after {
    border-bottom: none;
  } 

`;
DateTimeFieldContainer.displayName = 'DateTimeFieldContainer';


export const HelperText = styled.div`
  width: 100%;
  ${props => props.theme.typo.subtitle};
  color: ${props => props.theme.palette.error};
`;
HelperText.displayName = 'HelperText';