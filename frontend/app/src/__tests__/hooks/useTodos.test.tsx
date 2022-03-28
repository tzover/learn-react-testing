import { RecoilRoot } from 'recoil'
import { renderRecoilHook } from 'react-recoil-hooks-testing-library'
import { act, cleanup } from '@testing-library/react-hooks'

// contexts

// hooks
import useTodos from '../../hooks/useTodos'

/* 実施するテストケース

- Custom hooks

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
  it('Custom hooks -> initialize', async () => {
    const { result } = renderRecoilHook(() => useTodos(), {
      wrapper: RecoilRoot,
    })

    expect(result.current.todos).toStrictEqual([])
  })
  it('Custom hooks -> Registration and Delete', () => {
    const { result } = renderRecoilHook(() => useTodos(), {
      wrapper: RecoilRoot,
    })

    // registration
    act(() => result.current.registrationTodo('TEST'))

    expect(result.current.todos[0].todo).toBe('TEST')

    // delete
    act(() => result.current.deleteTodo(0))

    expect(result.current.todos).toStrictEqual([])
  })
  it('Custom hooks -> Registration and All Delete', () => {
    const { result } = renderRecoilHook(() => useTodos(), {
      wrapper: RecoilRoot,
    })

    // registration
    act(() => result.current.registrationTodo('TEST'))

    expect(result.current.todos[0].todo).toBe('TEST')

    // delete -> modal flagment on
    act(() => result.current.deleteAllTodos())
  })
  it('Custom hooks -> Registration and Complete flagment', () => {
    const { result } = renderRecoilHook(() => useTodos(), {
      wrapper: RecoilRoot,
    })

    // registration
    act(() => result.current.registrationTodo('TEST'))

    expect(result.current.todos[0].todo).toBe('TEST')

    // complete
    act(() => result.current.completedTodo(result.current.todos[0].id, true))

    expect(result.current.todos[0].complete).toBe(true)

    // complete
    act(() => result.current.completedTodo('TEST', false))

    expect(result.current.todos[0].complete).toBe(true)
  })
  it('Custom hooks -> Registration and editFlug', () => {
    const { result } = renderRecoilHook(() => useTodos(), {
      wrapper: RecoilRoot,
    })

    // registration
    act(() => result.current.registrationTodo('TEST'))

    expect(result.current.todos[0].todo).toBe('TEST')

    // edit -> edit flagment on
    act(() => result.current.editFlug(0))
  })
  it('Custom hooks -> Registration and EditRegistrationTodo', () => {
    const { result } = renderRecoilHook(() => useTodos(), {
      wrapper: RecoilRoot,
    })

    // registration
    act(() => result.current.registrationTodo('TEST'))

    expect(result.current.todos[0].todo).toBe('TEST')

    // editRegistration
    act(() =>
      result.current.editRegistrationTodo(result.current.todos, 'TEST2'),
    )

    expect(result.current.todos[0].todo).toBe('TEST2')
  })
})
