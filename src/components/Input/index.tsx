import React, { InputHTMLAttributes, useRef, useState } from 'react';

import { IconType } from 'react-icons';

import * as S from './styles';

interface ErrorMessage {
  err: boolean;
  message: string;
}

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  label: string; //Nome Do Input
  Icon?: IconType; //Icone para o Input
  err?: ErrorMessage; //Mensagem de erro
  onTop?: boolean; //Se falso, deixa o label em cima padrao
}

const Input: React.FC<Input> = ({
  label,
  Icon,
  err,
  onTop = false,
  ...attrs
}) => {
  const InputRef = useRef<HTMLInputElement>(null);
  const [InputValue, setInputValue] = useState(InputRef.current?.value);

  return (
    <S.Container
      inputStatus={InputValue}
      hasError={err?.err}
      onTop={onTop}
      hasIcon={Icon ? true : false}
    >
      <input
        onChange={() => setInputValue(InputRef.current?.value)}
        ref={InputRef}
        id={label}
        {...attrs}
      />
      {Icon ? <Icon size="22" /> : ''}
      <label htmlFor={label}>{label}</label>
      {err?.err ? <small>{err?.message}</small> : ''}
    </S.Container>
  );
};

export default Input;
