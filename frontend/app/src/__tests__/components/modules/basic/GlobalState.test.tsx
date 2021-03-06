import { act, cleanup, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

// components
import GlobalState from '../../../../components/modules/basic/GlobalState'

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
describe('Unit -> modules', () => {
  it('Rendering', () => {
    act(() => {
      render(
        <RecoilRoot>
          <GlobalState />
        </RecoilRoot>,
      )
    })

    expect(screen.getByText('Recoil components')).toBeInTheDocument()
    expect(screen.getByText('useContext')).toBeInTheDocument()
  })
})
