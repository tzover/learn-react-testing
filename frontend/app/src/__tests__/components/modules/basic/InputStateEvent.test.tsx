import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// components
import InputStateEvent from '../../../../components/modules/basic/InputStateEvent'

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
      render(<InputStateEvent />)
    })

    expect(screen.getByRole('textbox')).toBeTruthy()
    expect(screen.getByRole('button', { name: 'Push' })).toBeTruthy()
    expect(screen.getByText('Result')).toBeInTheDocument()
  })
  it('userEvent onChange and onClick', () => {
    act(() => {
      render(<InputStateEvent />)
    })
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: 'Push' })

    // onChange
    userEvent.type(input, 'TEST')
    expect(input).toHaveValue('TEST')

    // onClick
    userEvent.click(button)
    expect(screen.getByText('TEST')).toBeInTheDocument()

    // onKeyPress
    userEvent.type(input, 'TEST2{enter}')
    expect(screen.getByText('TEST2')).toBeInTheDocument()

    // value = ""
    userEvent.type(input, '{enter}')
    expect(screen.getByText('TEST2')).toBeInTheDocument()
  })
})
