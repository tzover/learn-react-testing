import { act, cleanup, render, screen } from '@testing-library/react'

// components
import Layout from '../../../components/templates/Layout'

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
        <Layout title='TEST' appName='LAYOUT-TEST'>
          <h2>TEST</h2>
        </Layout>,
      )
    })

    expect(screen.getByText('LAYOUT-TEST')).toBeInTheDocument()
    expect(screen.getByTestId('layout-frame')).toHaveClass('px-10 py-8')
  })
})
