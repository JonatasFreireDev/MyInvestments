import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  InputHTMLAttributes,
} from 'react';

import { IconType } from 'react-icons';
import { useField } from '@unform/core';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string; //Nome do input
  label: string; //Nome Do label
  Icon?: IconType; //Icone para o Input
  // onTop?: boolean; //Se falso, deixa o label em cima padrao
}

/**
 * Input ja estilizado para ser ultilizado junto a biblioteca Unform
 *
 * @param {string} name - Nome do Input para referencia de valores.
 * @param {string} label - Nome do label para exibição.
 * @param {IconType} Icon - Icone para exibir junto ao input (React-Icons) (Opcional)
 *
 */
const Input: React.FC<InputProps> = ({
  label,
  Icon,
  // onTop = false,
  name,
  ...attrs
}) => {
  const [hasValue, setHasValue] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField, error]);

  const onBlurHandle = useCallback(() => {
    if (inputRef.current?.value) {
      setHasValue(true);
    } else {
      setHasValue(false);
    }
  }, []);

  return (
    <S.Container
      hasValue={hasValue}
      hasError={!!error}
      hasIcon={!!Icon}
      // onTop={onTop}
    >
      <input
        onBlur={onBlurHandle}
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
