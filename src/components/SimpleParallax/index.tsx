import React from 'react';

import { AnyStyledComponent } from 'styled-components';

import * as S from './styles';

interface IParalaxProps {
  image: string;
  className?: AnyStyledComponent;
}

/**
 * Adiciona uma div com uma imagem de background com efeito de parallax.
 *
 * Poder ser estilizado com Styled-Components.
 *
 * @param {string} image - Imagem a ser exibida ao fundo.
 *
 */
const SimpleParallax: React.FC<IParalaxProps> = ({ image, className }) => {
  return <S.Container className={className} Image={image}></S.Container>;
};

export default SimpleParallax;
