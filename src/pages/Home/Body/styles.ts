import styled from 'styled-components';

import IntersectionElement from '../../../components/Intersection';

import { IColors } from '../../../styles/theme';

const MainColor = (props: IColors) => props.theme.theme.mainTheme;
const BackgroundColor = (props: IColors) => props.theme.theme.secondTheme;
const TextColor = (props: IColors) => props.theme.text.black;

export const Container = styled.div`
  background-color: ${BackgroundColor};
  color: ${TextColor};
`;

export const Content = styled.div`
  background-color: ${BackgroundColor};
  margin: auto;
  width: 70vw;
  height: 100vh;

  & > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Card = styled(IntersectionElement)`
  display: grid;
  margin: 30px 60px;
  grid-auto-flow: row;
  padding: 15px;
  align-items: center;
  background-color: white;
  grid-auto-columns: 300px;
  grid-auto-rows: 50px 1fr;
  border-radius: 10px;
  box-shadow: -2px 17px 46px -16px rgba(0, 0, 0, 0.84);
  -webkit-box-shadow: -2px 17px 46px -16px rgba(0, 0, 0, 0.84);
  -moz-box-shadow: -2px 17px 46px -16px rgba(0, 0, 0, 0.84);

  h2 {
    text-align: center;
  }

  p {
    margin: auto;
  }
`;

export const Title = styled.p`
  text-align: center;
  font-size: 32px;
  margin: 100px 0px 50px 0px;
  padding: auto;
`;

export const Separador = styled.div`
  background-color: ${MainColor};
  width: 100%;
  height: 100px;
`;
