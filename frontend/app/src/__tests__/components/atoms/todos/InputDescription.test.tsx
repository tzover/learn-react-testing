import { act, cleanup, render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { RecoilRoot } from 'recoil'

// components
import InputDescription from '../../../../components/atoms/todos/InputDescription'

/* 実施するテストケース

- Rendering
*/

// mock化
jest.mock('next/dist/client/router', () => require('next-router-mock'))
mockRouter.setCurrentUrl('/')

// Processing to be performed before the test
beforeEach(() => {
  cleanup()
})

// Processing to be performed after the test
afterEach(() => {
  cleanup()
})

// Testing
describe('Unit -> pages', () => {
  it('Rendering', () => {
    act(() => {
      render(
        <RecoilRoot>
          <InputDescription isEdit={false} description={'TEST'} />
        </RecoilRoot>,
      )
    })

    expect(screen.getByText('TEST')).toBeInTheDocument()
    expect(screen.getByText('TEST')).toHaveClass('text-blue-500')
  })
  it('Rendering Edit', () => {
    act(() => {
      render(
        <RecoilRoot>
          <InputDescription isEdit={true} description={'TEST'} />
        </RecoilRoot>,
      )
    })

    expect(screen.getByText('TEST')).toBeInTheDocument()
    expect(screen.getByText('TEST')).toHaveClass('text-green-500')
  })
})
