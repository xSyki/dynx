import { render, screen } from '@testing-library/react'

import App from '../components/App'

describe('App.js Component', () => {
  test('check text', () => {
    render(<App />)

    expect(screen.getByText(/Hello WebPack!/)).toBeTruthy()
  })
})
