import React, { useRef, useEffect, useState, InputHTMLAttributes } from 'react';

import { IconType } from 'react-icons';
import { useField } from '@unform/core';

import * as S from './styles';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string; //Nome do input
  label: string; //Nome Do label
  Icon?: IconType; //Icone para o Input
  onTop?: boolean; //Se falso, deixa o label em cima padrao
}

const Input: React.FC<IInput> = ({
  label,
  Icon,
  onTop = false,
  name,
  ...attrs
}) => {
  const [valueOfInput, setValueOfInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });

    if (error) setValueOfInput('');
  }, [fieldName, registerField, error]);

  return (
    <S.Container
      hasError={error ? true : false}
      hasIcon={Icon ? true : false}
      onTop={onTop}
    >
      <input
        value={valueOfInput}
        onChange={e => setValueOfInput(e.target.value)}
        ref={inputRef}
        name={name}
        id={label}
        {...attrs}
      />
      {Icon && <Icon size="22" />}
      {error && <small>{error}</small>}
      <label htmlFor={label}>{label}</label>
    </S.Container>
  );
};

export default Input;
