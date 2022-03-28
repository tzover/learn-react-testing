import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mockRouter from 'next-router-mock'

// components
import RouterEvent from '../../../../components/modules/basic/RouterEvent'

/* 実施するテストケース

- Rendering
- userEvent onClick
*/

// mock化
jest.mock('next/dist/client/router', () => require('next-router-mock'))
mockRouter.setCurrentUrl('/test')

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
      render(<RouterEvent />)
    })

    expect(screen.getByRole('button', { name: 'Router Action' })).toBeTruthy()
  })
  it('userEvent onClick', () => {
    act(() => {
      render(<RouterEvent />)
    })

    const button = screen.getByRole('button', { name: 'Router Action' })

    userEvent.click(button)

    expect(mockRouter.asPath).toBe('/test/test-router?msg=testRouter')
    expect(mockRouter.query).toStrictEqual({ msg: 'testRouter' })
  })
})
