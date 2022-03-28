import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mockRouter from 'next-router-mock'

// components
import PageBackButton from '../../../components/atoms/PageBackButton'

/* 実施するテストケース

- Rendering
- userEvent click
*/

// mock化
jest.mock('next/dist/client/router', () => require('next-router-mock'))
mockRouter.setCurrentUrl('/TEST')

// Processing to be performed before the test
beforeEach(() => {
  cleanup()
})

// Processing to be performed after the test
afterEach(() => {
  cleanup()
})

// Testing
describe('Unit -> atoms', () => {
  it('Rendering', () => {
    act(() => {
      render(<PageBackButton />)
    })

    expect(screen.getByRole('button', { name: /back/i })).toBeTruthy()
  })
  it('userEvent Click', () => {
    act(() => {
      render(<PageBackButton />)
    })

    const button = screen.getByRole('button', { name: /back/i })

    // default path
    expect(mockRouter.asPath).toBe('/TEST')

    // userEvent
    userEvent.click(button)

    // change path
    expect(mockRouter.asPath).toBe('/')
  })
})
