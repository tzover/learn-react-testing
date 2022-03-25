import { act, cleanup, render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { RecoilRoot } from 'recoil'

// components
import GlobalRecoilText from '../../../../components/atoms/basic/GlobalRecoilText'

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
          <GlobalRecoilText />
        </RecoilRoot>,
      )
    })

    expect(screen.getByText(/recoil/i)).toBeInTheDocument()
  })
})
