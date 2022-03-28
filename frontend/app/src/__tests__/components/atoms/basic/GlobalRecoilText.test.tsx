import { act, cleanup, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

// components
import GlobalRecoilText from '../../../../components/atoms/basic/GlobalRecoilText'

/* 実施するテストケース

- Rendering
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
    act(() => {
      render(
        <RecoilRoot>
          <GlobalRecoilText />
        </RecoilRoot>,
      )
    })

    expect(screen.getByText(/recoil/i)).toBeInTheDocument()
  })
})
