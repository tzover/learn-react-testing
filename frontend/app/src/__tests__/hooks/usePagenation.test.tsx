import { RecoilRoot } from 'recoil'
import { renderRecoilHook } from 'react-recoil-hooks-testing-library'
import { act, cleanup } from '@testing-library/react-hooks'

// contexts
import { fakeTodoBody } from '../../contexts/tests/fakeTodos'

// hooks
import usePagenation from '../../hooks/usePagenation'

/* 実施するテストケース

- Custom hooks

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
describe('Unit -> hooks', () => {
  it('Custom hooks -> initialize', async () => {
    const { result } = renderRecoilHook(() => usePagenation(fakeTodoBody), {
      wrapper: RecoilRoot,
    })

    expect(result.current.pageShowNum).toBe(5)
    expect(result.current.pageSliceIdx).toBe(0)
    expect(result.current.sliceIdx).toBe(0)
    expect(result.current.showNum).toBe(5)
    expect(result.current.pageShowArray).toStrictEqual([1, 2])
  })
  it('Custom hooks -> nextPage and prevPage', async () => {
    const { result } = renderRecoilHook(() => usePagenation(fakeTodoBody), {
      wrapper: RecoilRoot,
    })

    // nextPage
    act(() => result.current.nextPage(1))

    expect(result.current.sliceIdx).toBe(1)

    act(() => result.current.nextPage(2))

    expect(result.current.sliceIdx).toBe(1)

    // prevPage
    act(() => result.current.prevPage(1))

    expect(result.current.sliceIdx).toBe(0)

    act(() => result.current.prevPage(0))

    expect(result.current.sliceIdx).toBe(0)
  })
  it('Custom hooks -> choicePage', async () => {
    const { result } = renderRecoilHook(() => usePagenation(fakeTodoBody), {
      wrapper: RecoilRoot,
    })

    // choicePage
    act(() => result.current.choicePage(1))

    expect(result.current.sliceIdx).toBe(0)
  })
})
