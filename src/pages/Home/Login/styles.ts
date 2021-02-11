import styled, { keyframes } from 'styled-components';

import LoginImage from '../../../assets/login.svg';

import { IColors } from '../../../styles/theme';

const BackgroundColor = (props: IColors) => props.theme.theme.mainTheme;
const TextColor = (props: IColors) => props.theme.text.white;

const pulse = keyframes`
0%{
  opacity: 0;
}
50%{
  transform: scale(0.7);
  padding-top: 15px;
  opacity: 1;
}
100%{
  opacity: 0;
}`;

const appearFromRight = keyframes`
from{
  opacity: 0;
  transform: translateX(-50px);
}to{
  opacity: 1;
  transform: translateX(0px);
}`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: ${BackgroundColor};
  color: ${TextColor};
  height: 100vh;
`;

export const Login = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 35vw;
  animation: ${appearFromRight} 1s;

  @media (max-width: 1000px) {
    & {
      width: 100%;
    }
  }

  img {
    margin: auto;
    max-width: 220px;
  }

  form {
    margin: auto;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & > div {
    margin: auto;
    font-family: 'Maven Pro', sans-serif;
    text-align: center;
    margin-bottom: 10px;

    p {
      margin: 10px;
    }

    div {
      position: relative;

      svg {
        cursor: pointer;
        font-size: 60px;
        border: 3px solid dotted;
        border-radius: 100px;
        border-style: dotted;
        animation: 2s ${pulse} infinite;
      }
    }
  }
`;

export const Image = styled.div`
  background-image: url(${LoginImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;

  @media (max-width: 1200px) {
    & {
      width: 70%;
    }
  }

  @media (max-width: 600px) {
    & {
      display: none;
    }
  }
`;
