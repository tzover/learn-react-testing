import { act, cleanup, render, screen } from '@testing-library/react'

// components
import Header from '../../../components/modules/Header'

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
      render(<Header title={'TEST'} appName={'TEST'} />)
    })
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
})
