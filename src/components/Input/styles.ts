import styled, { css } from 'styled-components';

interface InputStatus {
  hasValue: boolean;
  hasIcon?: boolean;
  hasError?: boolean;
  onTop?: boolean;
}

export const Container = styled.div<InputStatus>`
  position: relative;
  width: 100%;
  margin: 20px 0;

  label {
    position: absolute;
    transition: all 0.5s ease;
    top: ${props => (props.onTop ? '-15px' : '5px')};
    font-size: ${props => (props.onTop ? '14px' : '')};
    color: ${props => props.theme.input.normal};
    left: 10px;
  }

  svg {
    color: ${props => props.theme.input.normal};
    position: absolute;
    right: 5px;
    transition: all 0.3s;
  }

  input {
    padding: ${props =>
      props.hasIcon ? '0px 30px 0px 5px' : '0px 5px 0px 5px'};
    height: 30px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.input.normal};
    background-color: transparent;
    color: ${props => props.theme.text.white};
    width: 100%;
    transition: all 0.3s;

    ${props =>
      props.hasValue &&
      css`
        border-bottom: 1px solid ${props => props.theme.input.active};

        & ~ label {
          font-size: 14px;
          top: -15px;
          color: ${props => props.theme.input.active};
        }

        & ~ svg {
          color: ${props => props.theme.input.active};
        }
      `}

    ${props =>
      props.hasError &&
      props.hasValue &&
      css`
        border-bottom: 1px solid ${props => props.theme.input.error};

        & ~ label {
          font-size: 14px;
          top: -15px;
          color: ${props => props.theme.input.error};
        }

        & ~ svg {
          color: ${props => props.theme.input.error};
        }
      `}


    ${props =>
      props.hasError &&
      css`
        border-bottom: 1px solid ${props => props.theme.input.error};

        & ~ label {
          color: ${props => props.theme.input.error};
        }
        & ~ svg {
          color: ${props => props.theme.input.error};
        }
      `}

    &:focus ~ label {
      font-size: 14px;
      top: -15px;
      color: ${props => props.theme.input.active};
    }

    &:focus {
      border-bottom: 1px solid ${props => props.theme.input.active};

      & ~ svg {
        color: ${props => props.theme.input.active};
      }
    }
  }

  small {
    display: ${(props: InputStatus) => (props.hasError ? 'block' : 'none')};
    position: absolute;
    margin: 5px;
    right: 0px;
    color: ${props => props.theme.input.error};
  }
`;
