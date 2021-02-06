import styled from 'styled-components';
import LoginImage from '../../assets/login.svg';

export const Container = styled.div``;

export const Welcome = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: var(--main-theme-color);
  color: var(--main-theme-words);
  height: 100vh;
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 500px;

  img{
    margin-bottom: 50px;
  }

  form{
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;

    input{
      margin: 10px;
    }

    button{
      margin: 10px;
      width: 100%;
      padding: 10px;
      color: var(--main-theme-words);
      background: var(--button-primary-color);

      &:hover{
        background: black;
      }
    }
  }

  p{
    text-align: center;
  }
`;

export const Image = styled.div`
  background-image: url(${LoginImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
`;
