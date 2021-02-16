import styled, { css, keyframes } from 'styled-components';

const appearFromTop = keyframes`
from{
  opacity: 0;
  transform: translateY(-50px);
}to{
  opacity: 1;
  transform: translateY(0px);
}`;

interface IParalaxProps {
  isVisible: boolean;
}

export const Container = styled.div<IParalaxProps>`
  opacity: 0;
  transition: all 0.5s;

  ${props =>
    props.isVisible &&
    css`
      animation: ${appearFromTop} 1s;
      opacity: 1;
    `}
`;
