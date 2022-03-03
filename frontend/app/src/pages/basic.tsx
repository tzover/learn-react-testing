import type { NextPage } from 'next'
import { useRouter } from 'next/router'

// components
import Layout from '../components/templates/Layout'
import SubTitle from '../components/atoms/SubTitle'

// contexts
import { appName, title } from '../contexts/AppBasicContext'

const Basic: NextPage = () => {
  const router = useRouter()
  return (
    <Layout title={title} appName={appName}>
      <div className='py-10'>
        {/* SubTitle */}
        <SubTitle title={'Basic'} />
      </div>
      <div className='py-10'>kokokokokokoko</div>
      <div className='py-10'>
        <div className='w-full text-right px-10'>
          <button
            className='p-5 border-2 rounded-2xl hover:bg-pink-100 hover:underline'
            onClick={() => router.push('/')}
          >
            Home
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Basic
