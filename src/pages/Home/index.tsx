import React, { useCallback, useState } from 'react';

import * as S from './styles';
import Logo from '../../assets/logo.svg';

import LoadingCircle from '../../components/LoadingCircle';

import Input from '../../components/Input';
import ButtonSubmitForm from '../../components/ButtonSubmitForm';

import { BsArrowDownShort } from 'react-icons/bs';
import { MdAccountCircle, MdLock, MdSend } from 'react-icons/md';

const Home: React.FC = () => {
  const subimitForm = useCallback(e => {
    e.preventDefault();

    alert('foi');
  }, []);

  return (
    <div>
      <S.Welcome>
        <S.Login>
          <img src={Logo} alt="Bear Trading" />

          <form
            onSubmit={e => {
              subimitForm(e);
            }}
          >
            <Input
              label="Login"
              type="email"
              Icon={MdAccountCircle}
              autoFocus
              required
              err={{
                err: true,
                message: 'email invalido',
              }}
            />
            <Input label="Senha" Icon={MdLock} type="password" required />
            <ButtonSubmitForm Icon={MdSend} type="submit">
              Entrar
            </ButtonSubmitForm>
          </form>

          <div>
            <p>Não tem uma conta ?</p>
            <p>Cadastre-se</p>
            <div>
              <BsArrowDownShort />
            </div>
          </div>
        </S.Login>
        <S.Image />
      </S.Welcome>
      <p>
        <LoadingCircle />
      </p>
    </div>
  );
};

export default Home;
