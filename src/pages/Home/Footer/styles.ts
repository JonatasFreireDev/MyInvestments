import styled from 'styled-components';

import { IColors } from '../../../styles/theme';

const MainColor = (props: IColors) => props.theme.theme.mainTheme;
const TextColor = (props: IColors) => props.theme.text.white;

export const Container = styled.div`
  background-color: ${MainColor};
  color: ${TextColor};
`;

export const Separador = styled.div`
  background-color: ${MainColor};
  width: 100%;
  height: 150px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 300px;
  margin: auto;

  @media (max-width: 900px) {
    & {
      flex-direction: column;
    }
  }

  div {
    margin: auto;
  }
`;

export const Perfil = styled.div`
  font-size: 18px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
  grid-template-columns: 100px 200px;

  img {
    width: 100px;
    border-radius: 100%;
  }

  div {
    p {
      margin: auto;
    }
  }
`;

export const Comentario = styled.div`
  width: 50%;

  p {
    font-size: 18px;
    margin: auto;
  }
`;
