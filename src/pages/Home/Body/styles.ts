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
  margin: 100px auto;
  width: 70vw;
  min-height: 90vh;
  height: 100%;

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
  grid-auto-rows: 50px 1fr 80px;
  border-radius: 10px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.1);
  }

  svg {
    font-size: 80px;
    width: 100%;
  }

  h2 {
    font-size: 25px;
    text-align: center;
    font-variant: small-caps;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    color: black;
    padding: 10px;
    text-align: center;
    margin: auto;
  }
`;

export const Title = styled.p`
  text-align: center;
  font-size: 32px;
  margin: auto;
  margin-bottom: 30px;
`;

export const Separador = styled.div`
  background-color: ${MainColor};
  width: 100%;
  height: 150px;
`;

export const Fight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${BackgroundColor};
  width: 100%;
  height: 300px;

  img {
    margin: 100px;
    height: 200px;
  }
`;
