import React from 'react';

import * as S from './styles';

import LoadingCircle from '../../components/LoadingCircle';

import Login from './Login';

const Home: React.FC = () => {
  return (
    <div>
      <S.Container>
        <Login />
      </S.Container>
      <LoadingCircle />
    </div>
  );
};

export default Home;
