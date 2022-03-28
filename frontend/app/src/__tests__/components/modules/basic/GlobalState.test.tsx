import { act, cleanup, render, screen } from '@testing-library/react'

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
      render(<GlobalState />)
    })

    expect(screen.getByText('Recoil components')).toBeInTheDocument()
    expect(screen.getByText('useContext')).toBeInTheDocument()
  })
})
