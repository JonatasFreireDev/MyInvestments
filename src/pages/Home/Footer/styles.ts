import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.theme.mainTheme};
  color: ${props => props.theme.text.white};
`;

export const Separador = styled.div`
  background-color: ${props => props.theme.theme.mainTheme};
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
