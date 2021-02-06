import React from 'react';

import * as S from './styles';
import Logo from '../../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <div>
      <S.Welcome>
        <S.Login>
          <img src={Logo} alt="Bear Trading" />

          <form>
            <input type="text" placeholder="Login" />
            <input type="text" placeholder="Senha" />
            <br />
            <button type="submit">Entrar</button>
          </form>

          <p>
            Não tem uma conta ?<br />
            <span>Cadastre-se</span>
          </p>
        </S.Login>
        <S.Image />
      </S.Welcome>
      <p>salmao</p>
    </div>
  );
};

export default Home;
