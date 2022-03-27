import { act, cleanup, render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'

// components
import Header from '../../../components/modules/Header'

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
      render(<Header title={'TEST'} appName={'TEST'} />)
    })
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})
