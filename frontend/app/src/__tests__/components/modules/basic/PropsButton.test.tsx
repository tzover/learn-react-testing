import { act, cleanup, render, screen } from '@testing-library/react'

// components
import PropsButton from '../../../../components/modules/basic/PropsButton'

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
      render(<PropsButton btnName='TEST' />)
    })

    expect(screen.getByRole('button', { name: 'TEST' })).toBeTruthy()
  })
})
