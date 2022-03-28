import { act, cleanup, render, screen } from '@testing-library/react'

// components
import SubTitle from '../../../components/atoms/SubTitle'

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
      render(<SubTitle title='TEST' />)
    })

    // title props
    expect(screen.getByText('TEST')).toBeInTheDocument()

    // default text
    expect(screen.getByText(/Frontend Test Sample/i)).toBeInTheDocument()
  })
})
