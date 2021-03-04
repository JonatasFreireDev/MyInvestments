import styled from 'styled-components';

import IntersectionElement from '../../../components/Intersection';

export const Container = styled.div`
  background-color: ${props => props.theme.theme.secondTheme};
  color: ${props => props.theme.text.black};
`;

export const Content = styled.div`
  margin: auto;
  padding: 100px;
  min-height: 100vh;

  & > div {
    background-color: ${props => props.theme.theme.secondTheme};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Title = styled.p`
  text-align: center;
  font-size: 42px;
  margin: auto;
  margin-bottom: 30px;
`;

export const Card = styled(IntersectionElement)`
  display: grid;
  margin: 30px 60px;
  grid-auto-flow: row;
  padding: 15px;
  align-items: center;
  background-color: white;
  grid-auto-columns: 300px;
  grid-auto-rows: 50px 1fr 120px;
  border-radius: 10px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.1);
  }

  svg {
    font-size: 80px;
    width: 100%;
  }

  h1 {
    font-size: 35px;
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

  ul {
    margin: 10px auto;
  }
`;

export const Planos = styled(IntersectionElement)`
  display: grid;
  margin: 30px 60px;
  grid-auto-flow: row;
  padding: 15px;
  align-items: center;
  background-color: white;
  grid-auto-columns: 300px;
  grid-auto-rows: 50px 50px 1fr 50px 1fr;
  border-radius: 10px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.1);
  }

  h1 {
    font-size: 35px;
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

  ul {
    margin: 10px auto;
  }
`;

export const Value = styled.div`
  text-align: center;
  font-size: 35px;
  width: 100%;
`;

export const Separador = styled.div`
  background-color: ${props => props.theme.theme.mainTheme};
  width: 100%;
  height: 150px;
`;

export const Fight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.theme.secondTheme};
  width: 100%;
  height: 300px;

  img {
    margin: 100px;
    height: 200px;
  }
`;
