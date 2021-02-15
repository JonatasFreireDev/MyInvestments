import React from 'react';

import ParallaxImage from '../../../assets/paralaxImage.svg';
import Paralax from '../../../components/SimpleParallax';

import * as S from './styles';

const Body: React.FC = () => {
  return (
    <>
      <Paralax image={ParallaxImage} />
      <S.Container>
        <p>aew</p>
      </S.Container>
    </>
  );
};

export default Body;
