import { IGlobalTheme } from '../interfaces';

import 'styled-components';

// overwrites styled-components's theme
declare module 'styled-components' {
  export interface DefaultTheme extends IGlobalTheme {}
}
