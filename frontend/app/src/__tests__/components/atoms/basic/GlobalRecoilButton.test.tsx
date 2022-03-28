import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { useEffect } from 'react'

// contexts
import { textState } from '../../../../contexts/BasicAtom'

// components
import GlobalRecoilButton from '../../../../components/atoms/basic/GlobalRecoilButton'

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
          <GlobalRecoilButton />
        </RecoilRoot>,
      )
    })

    expect(screen.getByRole('button', { name: /push/i })).toBeTruthy()
  })
  it('userEvent onClick', () => {
    const testFunc = jest.fn()
    act(() => {
      render(
        <RecoilRoot>
          <RecoilObserver node={textState} onChange={testFunc} />
          <GlobalRecoilButton />
        </RecoilRoot>,
      )
    })

    const button = screen.getByRole('button', { name: /push/i })

    userEvent.click(button)

    expect(testFunc).toBeCalledWith('')
  })
})
