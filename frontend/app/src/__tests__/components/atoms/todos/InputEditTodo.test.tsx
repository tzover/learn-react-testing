import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RecoilRoot } from 'recoil'

// components
import InputEditTodo from '../../../../components/atoms/todos/InputEditTodo'

/* 実施するテストケース

- Rendering
- userEvent onChange
*/

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
  it('userEvent onChange', () => {
    // dummy function
    const testFunc = jest.fn()
    act(() => {
      render(
        <RecoilRoot>
          <InputEditTodo inputEditTodo={'TEST'} setInputEditTodo={testFunc} />
        </RecoilRoot>,
      )
    })

    const input = screen.getByRole('textbox')

    // default value
    expect(input).toHaveValue('TEST')

    // userEvent
    userEvent.type(input, 'TEST2')

    // change value
    expect(testFunc).toHaveBeenCalledTimes(5)
  })
})
