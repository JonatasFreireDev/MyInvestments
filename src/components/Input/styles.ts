import styled, { css } from 'styled-components';
import { IColors } from '../../styles/theme';

interface InputStatus {
  hasValue: boolean;
  hasIcon?: boolean;
  hasError?: boolean;
  onTop?: boolean;
}

const ColorInputNormal = (props: IColors) => props.theme.input.normal;
const ColorInputActive = (props: IColors) => props.theme.input.active;
const ColorInputError = (props: IColors) => props.theme.input.error;
const ColorInputText = (props: IColors) => props.theme.text.white;

export const Container = styled.div<InputStatus>`
  position: relative;
  width: 100%;
  margin: 20px 0;

  label {
    position: absolute;
    transition: all 0.5s ease;
    top: ${(props: InputStatus) => (props.onTop ? '-15px' : '5px')};
    font-size: ${(props: InputStatus) => (props.onTop ? '14px' : '')};
    color: ${ColorInputNormal};
    left: 10px;
  }

  svg {
    color: ${ColorInputNormal};
    position: absolute;
    right: 5px;
    transition: all 0.3s;
  }

  input {
    padding: ${(props: InputStatus) =>
      props.hasIcon ? '0px 30px 0px 5px' : '0px 5px 0px 5px'};
    height: 30px;
    border: none;
    border-bottom: 1px solid ${ColorInputNormal};
    background-color: transparent;
    color: ${ColorInputText};
    width: 100%;
    transition: all 0.3s;

    ${(props: InputStatus) =>
      props.hasValue &&
      css`
        border-bottom: 1px solid ${ColorInputActive};

        & ~ label {
          font-size: 14px;
          top: -15px;
          color: ${ColorInputActive};
        }

        & ~ svg {
          color: ${ColorInputActive};
        }
      `}

    ${(props: InputStatus) =>
      props.hasError &&
      props.hasValue &&
      css`
        border-bottom: 1px solid ${ColorInputError};

        & ~ label {
          font-size: 14px;
          top: -15px;
          color: ${ColorInputError};
        }

        & ~ svg {
          color: ${ColorInputError};
        }
      `}


    ${(props: InputStatus) =>
      props.hasError &&
      css`
        border-bottom: 1px solid ${ColorInputError};

        & ~ label {
          color: ${ColorInputError};
        }
        & ~ svg {
          color: ${ColorInputError};
        }
      `}

    &:focus ~ label {
      font-size: 14px;
      top: -15px;
      color: ${ColorInputActive};
    }

    &:focus {
      border-bottom: 1px solid ${ColorInputActive};

      & ~ svg {
        color: ${ColorInputActive};
      }
    }
  }

  small {
    display: ${(props: InputStatus) => (props.hasError ? 'block' : 'none')};
    position: absolute;
    margin: 5px;
    right: 0px;
    color: ${ColorInputError};
  }
`;
