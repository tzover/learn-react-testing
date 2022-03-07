import type { NextPage } from 'next'
import { useRouter } from 'next/router'

// components
import Layout from '../components/templates/Layout'
import Basic from '../components/modules/Basic'
import SubTitle from '../components/atoms/SubTitle'

// contexts
import { appName, title } from '../contexts/AppBasicContext'

const BasicPage: NextPage = () => {
  const router = useRouter()
  return (
    <Layout title={title} appName={appName}>
      <div className='py-10'>
        {/* SubTitle */}
        <SubTitle title={'Basic'} />
      </div>
      {/* Main container */}
      <div className='px-12'>
        <Basic />
      </div>
      {/* Page back button Container */}
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

export default BasicPage
