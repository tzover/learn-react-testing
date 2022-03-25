import { act, cleanup, render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { RecoilRoot } from 'recoil'

// components
import EditFlagButton from '../../../../components/atoms/todos/EditFlagButton'

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
      render(
        <RecoilRoot>
          <EditFlagButton idx={0} />
        </RecoilRoot>,
      )
    })

    expect(screen.getByRole('button')).toBeTruthy()
    expect(screen.getByRole('img', { name: /edit/i })).toBeTruthy()
  })
})
