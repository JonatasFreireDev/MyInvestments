import React from 'react';

import ParallaxImage from '../../../assets/trades2.jpg';
import Paralax from '../../../components/SimpleParallax';

import * as S from './styles';

const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.Separador />
      <Paralax image={ParallaxImage} />
      <S.Content>
        <S.Perfil>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGsNZWkSuu4lw/profile-displayphoto-shrink_800_800/0/1533669455608?e=1619049600&v=beta&t=oxSPQK5yT9Gj-2-FpvatheApb4oV6TEsrca9Z90Q0xo"
            alt="jonatas"
          />
          <div>
            <p>Jonatas Freire</p>
            <p>Programador Front-End</p>
            <p>jonatasf1997@hotmail.com</p>
            <p>2021</p>
          </div>
        </S.Perfil>
        <S.Comentario>
          <p>
            Este site é apenas um projeto de desenvolvimento front end para
            estudos e testes.
          </p>
        </S.Comentario>
      </S.Content>
    </S.Container>
  );
};

export default Footer;
