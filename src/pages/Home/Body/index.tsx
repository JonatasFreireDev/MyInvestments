import React from 'react';

import ParallaxImage from '../../../assets/paralaxImage.svg';
import Paralax from '../../../components/SimpleParallax';
import { FcDataSheet, FcApproval, FcBullish, FcDebt } from 'react-icons/fc';

import Touro from '../../../assets/touro.svg';
import Urso from '../../../assets/urso.svg';

import * as S from './styles';

const Body: React.FC = () => {
  return (
    <>
      <S.Container>
        <S.Separador />
        <Paralax image={ParallaxImage} />
        <S.Separador />

        <S.Content>
          <S.Title>Objetivos</S.Title>
          <div>
            {objetive.map(dat => (
              <S.Card>
                <h2>{dat.title}</h2>
                <p>{dat.description}</p>
                {dat.icon}
              </S.Card>
            ))}
          </div>
        </S.Content>
        <S.Separador />
        <S.Fight>
          <img src={Touro} />
          <img src={Urso} />
        </S.Fight>
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

const objetive = [
  {
    icon: <FcDataSheet />,
    title: 'Chega de Planilhas',
    description:
      'Já passou o tempo de usar planilhas para gerenciar o seu dinheiro. Utilize sistemas mais robustos que facilitam a sua vida com os seus negócios !',
  },
  {
    icon: <FcApproval />,
    title: 'Simplicidade',
    description: 'Adicione, altere, exclua ordens apenas com alguns cliques !',
  },
  {
    icon: <FcBullish />,
    title: 'Relatórios',
    description:
      'Relatórios por operação, plano de trading, mensal e anual em gráficos para facilitar a sua vida em suas decisões!',
  },
  {
    icon: <FcDebt />,
    title: 'Darf',
    description:
      'Todas as suas darf’s em operações de swing trade calculadas automaticamente com apenas um clique !',
  },
];

const plan = [
  {
    title: 'Free',
    description: 'salve',
  },
  {
    title: 'Premium',
    description: 'salve',
  },
];

export default Body;
