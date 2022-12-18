export interface ThemeInterface {
  background: {
    default: string
  }
  text: {
    default: string
    darker: string
  }
}

export const theme: ThemeInterface = {
  background: {
    default: '#80BDE3',
  },
  text: {
    default: '#FFFFFF',
    darker: '#E3E3E3',
  },
}
