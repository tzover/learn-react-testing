import { act, cleanup, render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import { RecoilRoot } from 'recoil'
// import { useEffect } from 'react'

// contexts
// import { editTodosState, todosState } from '../../../../contexts/TodosAtom'

// components
import EditRegistrationButton from '../../../../components/atoms/todos/EditRegistrationButton'

/* 実施するテストケース

- Rendering
- userEvent onClick
*/

// Processing to be performed before the test
beforeEach(() => {
  cleanup()
})

// Processing to be performed after the test
afterEach(() => {
  cleanup()
})

// const RecoilObserver = ({ node, onChange }: { node: any; onChange: any }) => {
//   const value = useRecoilValue(node)
//   useEffect(() => onChange(value), [onChange, value])
//   return null
// }

// Testing
describe('Unit -> atoms', () => {
  it('Rendering', () => {
    act(() => {
      render(
        <RecoilRoot>
          <EditRegistrationButton inputTodo='TEST' />
        </RecoilRoot>,
      )
    })

    expect(screen.getByRole('button', { name: /go/i })).toBeTruthy()
  })
  // it('userEvent onClick', () => {
  //   const testFunc = jest.fn()
  //   act(() => {
  //     render(
  //       <RecoilRoot>
  //         <RecoilObserver node={editTodosState} onChange={testFunc} />
  //         <EditRegistrationButton inputTodo='TEST' />
  //       </RecoilRoot>,
  //     )
  //   })

  //   const button = screen.getByRole('button')

  //   userEvent.click(button)

  //   // expect(testFunc).toBeCalled()
  // })
})
