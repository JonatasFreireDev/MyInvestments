import React from 'react';

import * as S from './styles';

interface IParalaxProps {
  image: string;
}

const SimpleParallax: React.FC<IParalaxProps> = ({ image }) => {
  return <S.Container Image={image}></S.Container>;
};

export default SimpleParallax;
