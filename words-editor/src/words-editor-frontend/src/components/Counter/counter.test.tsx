import { fireEvent, render, screen } from '@testing-library/react'

import Counter from './Counter'

describe('Counter Component', () => {
  test('Does the Counter exist', () => {
    render(<Counter />)

    expect(screen.getByText(/Current value: 0/)).toBeTruthy()
    expect(screen.getByText(/Increase value by 1/)).toBeTruthy()
  })

  test('Does button increase counter', () => {
    render(<Counter />)

    fireEvent.click(
      screen.getByRole('button', { name: /Increace value by 1/i })
    )

    expect(screen.getByText(/Current value: 1/)).toBeTruthy()
  })
})
