import { cleanup } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

// libs
import { checkTodo } from '../../libs/checkTodo'

/* 実施するテストケース

- Function -> checkTodo
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
describe('Unit -> libs', () => {
  it('checkTodo case of true', () => {
    const { result } = renderHook(() => checkTodo('TEST'))
    expect(result.current).toBeTruthy()
  })
  it('checkTodo case of false', () => {
    const { result } = renderHook(() => checkTodo(''))
    expect(result.current).toBeFalsy()
  })
})
