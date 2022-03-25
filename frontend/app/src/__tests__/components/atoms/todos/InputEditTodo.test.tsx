import { act, cleanup, render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { RecoilRoot } from 'recoil'

// components
import InputEditTodo from '../../../../components/atoms/todos/InputEditTodo'

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
    // dummy function
    const testFunc = jest.fn()

    act(() => {
      render(
        <RecoilRoot>
          <InputEditTodo inputEditTodo={'TEST'} setInputEditTodo={testFunc} />
        </RecoilRoot>,
      )
    })

    expect(screen.getByRole('textbox')).toBeTruthy()
    expect(screen.getByRole('textbox')).toHaveValue('TEST')
  })
})
