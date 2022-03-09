import { useRouter } from 'next/router'

const RouterEvent = () => {
  const router = useRouter()
  return (
    <div className='flex flex-col border-b-2 p-2'>
      <div className='p-3'>
        <button
          className='w-full bg-pink-100 p-2 hover:opacity-70'
          type='button'
          onClick={() =>
            router.push({
              pathname: `${router.asPath}/test-router`,
              query: { msg: 'testRouter' },
            })
          }
        >
          Router Action
        </button>
      </div>
    </div>
  )
}

export default RouterEvent
