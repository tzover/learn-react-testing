import { useRouter } from 'next/router'

const PageBackButton = () => {
  const router = useRouter()
  return (
    <div className='w-full text-right px-10'>
      <button
        className='p-5 border-2 rounded-2xl hover:bg-pink-100 hover:underline'
        onClick={() => router.push('/')}
      >
        Back
      </button>
    </div>
  )
}

export default PageBackButton
