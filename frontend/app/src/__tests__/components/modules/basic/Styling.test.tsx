import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// components
import Styling from '../../../../components/modules/basic/Styling'

/* 実施するテストケース

- Rendering
- userEvent hover and click
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
      render(<Styling />)
    })

    expect(screen.getByText('default text style')).toBeInTheDocument()
    expect(screen.getByText('default background style')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'HoverするとStyleが変わる' }),
    ).toBeTruthy()
    expect(
      screen.getByRole('button', { name: 'ClickするとStyleが変わる' }),
    ).toBeTruthy()
  })
  it('Rendering userEvent hover', () => {
    act(() => {
      render(<Styling />)
    })

    const button = screen.getByRole('button', {
      name: 'HoverするとStyleが変わる',
    })

    userEvent.hover(button)
    // expect(button).toHaveStyle({ backgroung: 'red' })
    expect(button).toHaveClass('hover:bg-pink-100 p-2 border-2')
  })
  it('Rendering userEvent click', () => {
    act(() => {
      render(<Styling />)
    })

    const button = screen.getByRole('button', {
      name: 'ClickするとStyleが変わる',
    })

    // default color
    expect(button).toHaveClass('bg-pink-100 p-2 border-2')

    // userEvent
    userEvent.click(button)

    // change color
    expect(button).toHaveClass('bg-blue-100 p-2 border-2')
  })
})
