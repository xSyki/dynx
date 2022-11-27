import 'styled-components/native'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    background: {
      default: string
    }

    text: {
      default: string
    }
  }
}
