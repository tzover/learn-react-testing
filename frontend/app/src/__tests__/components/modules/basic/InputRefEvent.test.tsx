import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// components
import InputRefEvent from '../../../../components/modules/basic/InputRefEvent'

/* 実施するテストケース

- Rendering
- userEvent
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
      render(<InputRefEvent />)
    })

    expect(screen.getByRole('textbox')).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Push' })).toBeTruthy()
    expect(screen.getByText('Result')).toBeInTheDocument()
  })
  it('userEvent onChange and onClick', () => {
    act(() => {
      render(<InputRefEvent />)
    })
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: 'Push' })

    // onClick
    userEvent.type(input, 'TEST')
    userEvent.click(button)
    expect(screen.getByText('TEST')).toBeInTheDocument()

    // onKeyPress
    userEvent.type(input, 'TEST2{enter}')
    expect(screen.getByText('TESTTEST2')).toBeInTheDocument()

    // value = ""
    userEvent.type(input, '{enter}')
    expect(screen.getByText('TESTTEST2')).toBeInTheDocument()
  })
})
