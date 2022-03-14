import { cleanup } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import { format } from 'date-fns'
import { dateFormat } from '../../contexts/AppBasicContext'

// libs
import { getDateTime } from '../../libs/getDateTime'

/* 実施するテストケース

- Function -> getDateTime
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
  it('getDateTime', () => {
    const date = format(new Date(), dateFormat)
    const { result } = renderHook(() => getDateTime())
    expect(result.current.dateTime.substr(0, 16)).toBe(date.substr(0, 16))
  })
})
