import axios from 'axios'
import { useState } from 'react'

// models
import { UserIF } from '../../../models/user'

// hooks
import useUserInfo from '../../../hooks/useUserInfo'

// interface
interface Props {
  users: UserIF[]
}

const FetchEvent = (props: Props) => {
  const { users } = props
  const { data, error, loading } = useUserInfo()

  const [flag, setFlag] = useState(false)
  const [result, setResult] = useState<UserIF[]>()

  const clickFetching = async () => {
    setFlag(true)

    await axios
      .get<UserIF[]>('https://jsonplaceholder.typicode.com/users')
      .then((res) => setResult(res.data.slice(0, 3)))
  }

  const renderResult = () => {
    if (loading) return <div>...loading</div>
    if (error) return <div>Error</div>
    if (data)
      return (
        <>
          {data &&
            data.map((item) => (
              <div key={item.id} className='my-2'>
                <div className='mx-3 w-4/5'>
                  <p className='truncate text-ellipsis overflow-hidden'>
                    Name: {item.username}
                  </p>
                </div>
              </div>
            ))}
        </>
      )
  }

  return (
    <div className='flex flex-col border-b-2 p-2'>
      <div className='px-10'>
        <h3 className='underline'>Client side fetch</h3>
        {renderResult()}
      </div>
      <div className='px-10'>
        <h3 className='underline'>Server side fetch</h3>
        {users &&
          users.map((item) => (
            <div key={item.id} className='my-2'>
              <div className='mx-3 w-4/5'>
                <p className='truncate text-ellipsis overflow-hidden'>
                  Company: {item.company.name}
                </p>
              </div>
            </div>
          ))}
      </div>
      <div className='px-10'>
        <h3 className='underline'>Click event fetch (client)</h3>
        <div className='p-3'>
          <button
            className={`w-full p-2 ${
              flag ? 'bg-gray-500' : 'bg-pink-100 hover:opacity-70'
            }`}
            type='button'
            disabled={flag && true}
            onClick={() => clickFetching()}
          >
            {flag ? 'Clicked' : 'Click here!'}
          </button>
          {flag &&
            result &&
            result.map((item) => (
              <div key={item.id} className='my-2'>
                <div className='mx-3 w-4/5'>
                  <p className='truncate text-ellipsis overflow-hidden'>
                    Phone number: {item.phone}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default FetchEvent
