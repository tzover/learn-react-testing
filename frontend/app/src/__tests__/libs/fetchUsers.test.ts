jest.mock('axios')
import axios from 'axios'
import { cleanup } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'

// libs
import { fetchUsers, testUserData } from '../../libs/fetchUsers'

// mock
const mockedAxios = axios as jest.Mocked<typeof axios>

/* 実施するテストケース

- Function -> fetchUsers
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
describe('Unit -> libs', () => {
  it('fetchUsers resolve', async () => {
    mockedAxios.get.mockResolvedValue({ data: testUserData })

    const { result } = renderHook(async () => fetchUsers())
    expect(await result.current).toBe(testUserData)
  })
  it('fetchUsers reject', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Async error'))

    const { result } = renderHook(async () => fetchUsers())
    expect(await result.current).toBe(undefined)
  })
})
