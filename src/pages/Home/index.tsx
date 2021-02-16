import React from 'react';

import * as S from './styles';

import Login from './Login';
import Body from './Body';

const Home: React.FC = () => {
  return (
    <S.Container>
      {/* <Login /> */}
      <Body />
    </S.Container>
  );
};

export default Home;
