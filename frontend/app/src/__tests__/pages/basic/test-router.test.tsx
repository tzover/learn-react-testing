import { act, cleanup, render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'

// components
import RouterTest from '../../../pages/basic/test-router'

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
      render(<RouterTest />)
    })
    // Header.tsx
    expect(screen.getByText('React * Next Testing')).toBeInTheDocument()

    // Main contents
    expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument()

    // Footer.tsx
    expect(screen.getByText(/Produced by © yt/i)).toBeInTheDocument()
  })
})
