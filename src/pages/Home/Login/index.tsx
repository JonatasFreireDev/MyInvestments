import React, { useRef } from 'react';

import { Form } from '@unform/web';
import * as Yup from 'yup';
import { SubmitHandler, FormHandles } from '@unform/core';
import Input from '../../../components/Input';
import ButtonSubmitForm from '../../../components/ButtonSubmitForm';

import * as S from './styles';
import Logo from '../../../assets/logo.svg';
import { BsArrowDownShort } from 'react-icons/bs';
import { MdAccountCircle, MdLock, MdSend } from 'react-icons/md';

interface SignUpFormData {
  email: string;
  senha: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<SignUpFormData> = async (
    data,
    { reset }
  ) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Precisa ser um e-mail Válido')
          .required('Informe seu email'),
        senha: Yup.string()
          .min(6, 'Senha precisa ter ao menos 6 digitos')
          .required('Informe sua senha'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed
      alert([data.email, data.senha]);
      formRef.current?.setErrors({});
      reset();
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          // @ts-ignore: Unreachable code error
          validationErrors[error.path] = error.message;
        });

        formRef.current?.setErrors(validationErrors);
      }
    }
  };

  return (
    <S.Container id="top">
      <S.Login>
        <img src={Logo} alt="Bear Trading" />

        <Form onSubmit={handleSubmit} ref={formRef} noValidate>
          <Input
            name="email"
            label="Email"
            type="email"
            Icon={MdAccountCircle}
            autoFocus
          />
          <Input name="senha" label="Senha" Icon={MdLock} type="password" />
          <ButtonSubmitForm Icon={MdSend} type="submit">
            Entrar
          </ButtonSubmitForm>
        </Form>

        <div>
          <p>Não tem uma conta ?</p>
          <p>Cadastre-se</p>
          <div>
            <BsArrowDownShort />
          </div>
        </div>
      </S.Login>
      <S.Image />
    </S.Container>
  );
};

export default Login;
