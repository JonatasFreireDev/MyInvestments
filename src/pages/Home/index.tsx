import React from 'react';

import * as S from './styles';

import Login from './Login';
import Body from './Body';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <S.Container>
      <Login />
      <Body />
      <Footer />
    </S.Container>
  );
};

export default Home;
