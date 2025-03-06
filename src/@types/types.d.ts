import 'styled-components'
import { defaultTheme } from '../styles/DefaultTheme/default'

type DefaultType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultType { }
}