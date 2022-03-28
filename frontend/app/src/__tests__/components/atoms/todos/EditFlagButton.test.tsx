import { act, cleanup, render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import userEvent from '@testing-library/user-event'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { useEffect } from 'react'

// contexts
import { pageState } from '../../../../contexts/TodosPagenationAtom'

// components
import EditFlagButton, {
  idCreater,
} from '../../../../components/atoms/todos/EditFlagButton'

/* 実施するテストケース

- Rendering
- userEvent onClick
- function
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
describe('Unit -> atoms', () => {
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
  it('userEvent onClick', () => {
    const testFunc = jest.fn()
    act(() => {
      render(
        <RecoilRoot>
          <RecoilObserver node={pageState} onChange={testFunc} />
          <EditFlagButton idx={0} />
        </RecoilRoot>,
      )
    })

    const button = screen.getByRole('button')

    userEvent.click(button)

    expect(testFunc).toBeCalled()
  })
  it('function case1 args = 0', () => {
    const { result } = renderHook(() => idCreater(1))
    expect(result.current.toString()).toBe('0')
  })
  it('function case2 args = 2', () => {
    const { result } = renderHook(() => idCreater(2))
    expect(result.current.toString()).toBe('5')
  })
})
