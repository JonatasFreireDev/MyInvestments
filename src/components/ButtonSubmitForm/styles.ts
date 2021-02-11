import styled, { keyframes } from 'styled-components';

import { darken } from 'polished';
import { IColors } from '../../styles/theme';

const move = keyframes`
  0%{
    right: 20px;
  }
  50%{
    right: 10px;
  }
  100%{
    right: 20px;
  }
`;

const IconColor = (props: IColors) => props.theme.icon.white;
const TextColor = (props: IColors) => props.theme.text.white;
const ButtonColor = (props: IColors) => props.theme.button.primaryColor;

export const Container = styled.div`
  margin-top: 10px;
  display: block;
  position: relative;
  padding: 0px;
  width: 100%;

  svg {
    opacity: 0;
    color: ${IconColor};
    position: absolute;
    top: 50%;
    right: 5px;
    transition: all 0.3s;
    transform: translateY(-50%);
  }

  button {
    margin: 20px 0px;
    padding: 15px;
    width: 100%;
    background-color: ${ButtonColor};
    color: ${TextColor};
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${darken(0.1, '#C48942')};
    }

    &:hover ~ svg {
      opacity: 1;
      animation: ${move} 1s infinite;
    }
  }
`;
