import styled, { css } from 'styled-components';
import { IColors } from '../../styles/theme';

interface InputStatus {
  inputStatus?: string;
  hasError?: boolean;
  onTop?: boolean;
  hasIcon?: boolean;
}

const ColorInputNormal = (props: IColors) => props.theme.input.normal;
const ColorInputActive = (props: IColors) => props.theme.input.active;
const ColorInputError = (props: IColors) => props.theme.input.error;
const ColorInputText = (props: IColors) => props.theme.text.white;

export const Container = styled.div<InputStatus>`
  display: inline-block;
  position: relative;
  padding: 0px;
  width: 100%;
  margin: 15px 0px;

  label {
    position: absolute;
    transition: all 0.5s ease;
    top: ${(props: InputStatus) => (!props.onTop ? '5px' : '-15px')};
    font-size: ${(props: InputStatus) => (!props.onTop ? '' : '14px')};
    left: 10px;
  }

  svg {
    color: ${ColorInputNormal};
    position: absolute;
    top: 50%;
    right: 5px;
    transition: all 0.3s;
    transform: translateY(-50%);
  }

  input {
    padding: ${(props: InputStatus) =>
      props.hasIcon ? '0px 30px 0px 5px' : '0px 5px 0px 5px'};
    height: 30px;
    border: none;
    border-bottom: 1px solid grey;
    background-color: transparent;
    color: ${ColorInputText};
    width: 100%;
    transition: all 0.3s;

    ${(props: InputStatus) =>
      props.inputStatus
        ? css`
            border-bottom: 1px solid ${ColorInputActive};

            & ~ label {
              font-size: 14px;
              top: -15px;
              color: ${ColorInputActive};
            }

            & ~ svg {
              color: ${ColorInputActive};
            }
          `
        : ''}

    ${(props: InputStatus) =>
      props.hasError
        ? css`
            border-bottom: 1px solid ${ColorInputError};
            & ~ label {
              color: ${ColorInputError};
            }
            & ~ svg {
              color: ${ColorInputError};
            }
          `
        : ''}

    ${(props: InputStatus) =>
      props.hasError && props.inputStatus
        ? css`
            border-bottom: 1px solid ${ColorInputError};

            & ~ label {
              font-size: 14px;
              top: -15px;
              color: ${ColorInputError};
            }

            & ~ svg {
              color: ${ColorInputError};
            }
          `
        : ''}

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

      /* &::placeholder{
        font-size: 10px;
        top: -15px;
        color: var(--input-hover-color);
      } */
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
