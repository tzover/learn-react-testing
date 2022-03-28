import { act, cleanup, render, screen } from '@testing-library/react'

// contexts
import { fakeUsers } from '../../../../contexts/tests/fakeUsers'

// components
import FetchEvent from '../../../../components/modules/basic/FetchEvent'

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

// Testing
describe('Unit -> modules', () => {
  it('Rendering', () => {
    act(() => {
      render(<FetchEvent users={fakeUsers} />)
    })

    expect(screen.getByText('Client side fetch')).toBeInTheDocument()
    expect(screen.getByText('Server side fetch')).toBeInTheDocument()
    expect(screen.getByText('Click event fetch (client)')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Click here!' })).toBeTruthy()
  })
})
