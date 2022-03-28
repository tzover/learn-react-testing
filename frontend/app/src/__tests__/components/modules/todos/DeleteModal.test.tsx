import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { useEffect } from 'react'

// contexts
import {
  deleteModalState,
  isEditState,
  todosState,
} from '../../../../contexts/TodosAtom'

// components
import DeleteModal from '../../../../components/modules/todos/DeleteModal'

/* 実施するテストケース

- Rendering
- userEvent onClick -> Yes and No
*/

// Processing to be performed before the test
beforeEach(() => {
  cleanup()
})

// Processing to be performed after the test
afterEach(() => {
  cleanup()
})

const RecoilObserver = ({ node, onChange }: { node: any; onChange: any }) => {
  const value = useRecoilValue(node)
  useEffect(() => onChange(value), [onChange, value])
  return null
}

// Testing
describe('Unit -> modules', () => {
  it('Rendering', () => {
    act(() => {
      render(
        <RecoilRoot>
          <DeleteModal isDeleteModalOpen={true} />
        </RecoilRoot>,
      )
    })

    expect(screen.getByText('Are you sure?')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'No' })).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Yes' })).toBeTruthy()
  })
  it('userEvent onClick -> Yes', () => {
    const testFunc1 = jest.fn()
    const testFunc2 = jest.fn()
    act(() => {
      render(
        <RecoilRoot>
          <RecoilObserver node={todosState} onChange={testFunc1} />
          <RecoilObserver node={isEditState} onChange={testFunc2} />
          <DeleteModal isDeleteModalOpen={true} />
        </RecoilRoot>,
      )
    })

    const button = screen.getByRole('button', { name: 'Yes' })

    userEvent.click(button)

    expect(testFunc1).toBeCalled()
    expect(testFunc2).toBeCalled()
  })
  it('userEvent onClick -> No', () => {
    const testFunc = jest.fn()
    act(() => {
      render(
        <RecoilRoot>
          <RecoilObserver node={deleteModalState} onChange={testFunc} />
          <DeleteModal isDeleteModalOpen={true} />
        </RecoilRoot>,
      )
    })

    const button = screen.getByRole('button', { name: 'No' })

    userEvent.click(button)

    expect(testFunc).toBeCalled()
  })
  it('Rendering Null', async () => {
    const { container } = render(<DeleteModal isDeleteModalOpen={false} />)

    expect(container.childElementCount).toEqual(0)
  })
})
