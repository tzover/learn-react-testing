import { act, cleanup, render, screen } from '@testing-library/react'

// components
import Testing from '../../../../components/modules/basic/Testing'

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
        <Testing testing='TEST'>
          <h2>TESTING</h2>
        </Testing>,
      )
    })

    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})
