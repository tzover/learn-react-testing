import { act, cleanup, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

// contexts
import { fakeUsers } from '../../../contexts/tests/fakeUsers'

// components
import Basic from '../../../components/modules/Basic'

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
          <Basic users={fakeUsers} />
        </RecoilRoot>,
      )
    })

    // text
    expect(screen.getByText('Testing message1')).toBeInTheDocument()
    expect(screen.getByTestId('msg')).toHaveTextContent('Testing message2')
    expect(screen.getByTestId('change-msg')).toHaveTextContent(
      'Testing message3',
    )

    // button
    expect(screen.getByRole('button', { name: /next1/i })).toBeTruthy()
    expect(screen.getByRole('button', { name: /next2/i })).toHaveClass(
      'w-1/4 p-1 my-2 border-2 hover:bg-pink-100',
    )
    expect(screen.getByRole('button', { name: /disabled/i })).toBeDisabled()
    expect(
      screen.getByRole('button', { name: /NamePropsButton/i }),
    ).toBeTruthy()

    // image
    expect(screen.getByRole('img')).toBeTruthy()
    expect(screen.getByTestId('test_img')).toBeTruthy()
    expect(screen.getByAltText('test_img')).toBeTruthy()

    // input
    expect(screen.getByPlaceholderText('testing')).toBeTruthy()
    expect(screen.getByRole('checkbox')).toBeTruthy()
    expect(screen.getByRole('slider')).toBeTruthy()
  })
})
