import styled from 'styled-components';

import { IColors } from '../../styles/theme';

const BackgroundColor = (props: IColors) => props.theme.theme.mainTheme;

export const Container = styled.div``;

export const Separador = styled.div`
  background-color: ${BackgroundColor};
  width: 100%;
  height: 100px;
`;
