import { act, cleanup, render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'

// components
import Home from '../../pages/index'

/* 実施するテストケース

- Rendering
- onClick action
*/

// mock化
jest.mock('next/dist/client/router', () => require('next-router-mock'))
mockRouter.setCurrentUrl('/')

// Processing to be performed before the test
beforeEach(() => {
  cleanup()
})

// Processing to be performed after the test
afterEach(() => {
  cleanup()
})

// Testing
describe('Unit -> pages', () => {
  it('Rendering', () => {
    act(() => {
      render(<Home />)
    })
    // Header.tsx
    expect(screen.getByText(/react/i)).toBeInTheDocument()

    // Main contents
    expect(screen.getByRole('button', { name: /basic/i })).toBeTruthy()
    expect(screen.getByRole('button', { name: /todos/i })).toBeTruthy()
    expect(screen.getByRole('button', { name: /blog/i })).toBeTruthy()

    // Footer.tsx
    expect(screen.findByText('Aisin Edgecloud Team')).toBeTruthy()
  })
  it('Rendering', () => {
    act(() => {
      render(<Home />)
    })
    // Header.tsx
    expect(screen.getByText(/react/i)).toBeInTheDocument()

    // Main contents
    expect(screen.getByRole('button', { name: /basic/i })).toBeTruthy()
    expect(screen.getByRole('button', { name: /todos/i })).toBeTruthy()
    expect(screen.getByRole('button', { name: /blog/i })).toBeTruthy()

    // Footer.tsx
    expect(screen.findByText('Aisin Edgecloud Team')).toBeTruthy()
  })
})
