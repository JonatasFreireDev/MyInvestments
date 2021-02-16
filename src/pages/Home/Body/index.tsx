import React from 'react';

import ParallaxImage from '../../../assets/paralaxImage.svg';
import Paralax from '../../../components/SimpleParallax';

import * as S from './styles';

const objetive = [
  {
    title: 'Chega de Planilhas !',
    description: 'salve',
  },
  {
    title: 'Simplicidade !',
    description: 'salve',
  },
  {
    title: 'Relatórios',
    description: 'salve',
  },
  {
    title: 'Darf',
    description: 'salve',
  },
];

const plan = [
  {
    title: 'Chega de Planilhas !',
    description: 'salve',
  },
  {
    title: 'Simplicidade !',
    description: 'salve',
  },
];

const Body: React.FC = () => {
  return (
    <>
      <S.Container>
        <S.Separador />
        <Paralax image={ParallaxImage} />

        <S.Content>
          <S.Title>Objetivo</S.Title>
          <div>
            {objetive.map(dat => (
              <S.Card>
                <h2>{dat.title}</h2>
                <p>{dat.description}</p>
              </S.Card>
            ))}
          </div>
        </S.Content>
        <S.Separador />
        <S.Separador />
        <S.Content>
          <S.Title>Planos</S.Title>
          <div>
            {plan.map(dat => (
              <S.Card>
                <h2>{dat.title}</h2>
                <p>{dat.description}</p>
              </S.Card>
            ))}
          </div>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Body;
