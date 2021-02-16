import React from 'react';

import { AnyStyledComponent } from 'styled-components';

import * as S from './styles';

interface IParalaxProps {
  image: string;
  className?: AnyStyledComponent;
}

const SimpleParallax: React.FC<IParalaxProps> = ({ image, className }) => {
  return <S.Container className={className} Image={image}></S.Container>;
};

export default SimpleParallax;
