/* eslint-disable */
import { Theme } from '../src/theme/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}