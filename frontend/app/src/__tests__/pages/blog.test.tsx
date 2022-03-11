import { act, cleanup, render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'

// components
import BlogPage from '../../pages/blog'

/* 実施するテストケース

- Rendering
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
      render(<BlogPage />)
    })
    // Header.tsx
    expect(screen.getByText(/react/i)).toBeInTheDocument()

    // Main contents

    // Footer.tsx
    expect(screen.findByText('Aisin Edgecloud Team')).toBeTruthy()
  })
})
