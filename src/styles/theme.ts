export interface ThemeInterface {
  background: {
    default: string
  }

  text: {
    default: string
  }
}

export const theme: ThemeInterface = {
  background: { default: '#80BDE3' },
  text: { default: '#FFFFFF' },
}
