import React, { ButtonHTMLAttributes } from 'react';

import { IconType } from 'react-icons';

import * as S from './styles';

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon?: IconType;
}

const ButtonSubmitForm: React.FC<Button> = ({
  Icon,
  type,
  children,
  ...rest
}) => {
  return (
    <S.Container>
      <button type={type} {...rest}>
        {children}
      </button>
      {Icon ? <Icon size="22" /> : ''}
    </S.Container>
  );
};

export default ButtonSubmitForm;
