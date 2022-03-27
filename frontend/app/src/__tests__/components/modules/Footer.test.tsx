import { act, cleanup, render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'

// components
import Footer from '../../../components/modules/Footer'

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
describe('Unit -> modules', () => {
  it('Rendering', () => {
    act(() => {
      render(<Footer />)
    })

    // default text
    expect(screen.getByText('Produced by © yt 2022')).toBeInTheDocument()

    // styling
    expect(screen.getByTestId('footer-container')).toHaveClass(
      'fixed bottom-0 w-full bg-pink-100 p-2 border-t-2 border-gray-500',
    )
    expect(screen.getByTestId('footer-text')).toHaveClass(
      'w-11/12 text-right text-gray-500 opacity-80',
    )
  })
})
