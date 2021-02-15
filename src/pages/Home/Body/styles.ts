import styled from 'styled-components';

import { IColors } from '../../../styles/theme';

const BackgroundColor = (props: IColors) => props.theme.theme.secondTheme;
const TextColor = (props: IColors) => props.theme.text.black;

export const Container = styled.div`
  background-color: ${BackgroundColor};
  color: ${TextColor};
  height: 100vh;
`;
