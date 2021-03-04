import styled, { keyframes } from 'styled-components';

import { darken } from 'polished';

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

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }to{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  margin-top: 10px;
  display: block;
  position: relative;
  padding: 0px;
  width: 100%;

  & > svg {
    color: ${props => props.theme.icon.white};
    opacity: 0;
    position: absolute;
    top: 50%;
    right: 5px;
    transition: all 0.3s;
    transform: translateY(-50%);
  }

  button {
    background-color: ${props => props.theme.button.primaryColor};
    color: ${props => props.theme.text.white};
    height: 50px;
    width: 100%;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:disabled {
      color: ${props => props.theme.text.white};
      opacity: 0.4;
    }

    &:hover {
      background-color: ${darken(0.1, '#C48942')};
    }

    &:hover ~ svg {
      opacity: 1;
      animation: ${move} 1s infinite;
    }

    svg {
      color: ${props => props.theme.icon.white};
      margin: auto;
      animation: ${rotate} 0.7s infinite;
    }
  }
`;
