import type { NextPage } from 'next'
import { useRouter } from 'next/router'

// contexts
import { appName, testCase, title } from '../contexts/AppBasicContext'

// components
import Layout from '../components/templates/Layout'
import SubTitle from '../components/atoms/SubTitle'

const Home: NextPage = () => {
  const router = useRouter()
  return (
    <Layout title={title} appName={appName}>
      <div className='py-10'>
        {/* SubTitle */}
        <SubTitle title={'Home'} />
      </div>
      <div className='py-10'>
        <div className='flex justify-center items-center flex-wrap'>
          {testCase.map((item) => (
            <div key={item} className='mx-5'>
              <button
                className='p-20 border-2 text-2xl rounded-xl hover:bg-pink-100 hover:underline'
                onClick={() => router.push(item.toLocaleLowerCase())}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home
