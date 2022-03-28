import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { act, cleanup, renderHook } from '@testing-library/react-hooks'

// hooks
import useUserInfo from '../../hooks/useUserInfo'
import { fakeUsers } from '../../contexts/tests/fakeUsers'

// mock
const mock = new MockAdapter(axios)
const getUserInfo = async (num: number) => {
  mock
    .onGet('https://jsonplaceholder.typicode.com/users')
    .reply(num, { data: fakeUsers })
}

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
  it('Custom hooks -> setState and initialize', async () => {
    act(async () => getUserInfo(200))
    const { result } = renderHook(async () => useUserInfo())
    console.log(result.current)
  })
})

// ??????
