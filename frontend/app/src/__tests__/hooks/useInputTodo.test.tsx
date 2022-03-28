import { act, cleanup, renderHook } from '@testing-library/react-hooks'

// hooks
import useInputTodo from '../../hooks/useInputTodo'

/* 実施するテストケース

- Custom hooks
  - initialize
  - setState
  - initialize function
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
describe('Unit -> hooks', () => {
  it('Custom hooks -> setState and initialize', async () => {
    const { result } = renderHook(() => useInputTodo())

    // initialize
    expect(result.current.inputTodo).toBe('')

    // setState
    act(() => result.current.onChangeInputTodo({ target: { value: 'TEST' } }))

    // change value
    expect(result.current.inputTodo).toBe('TEST')

    // initialize function
    act(() => result.current.initializeInput())

    // change value
    expect(result.current.inputTodo).toBe('')
  })
})
