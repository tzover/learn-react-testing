import type { NextPage } from 'next'
import { useRouter } from 'next/router'

// components
import Layout from '../components/templates/Layout'
import SubTitle from '../components/atoms/SubTitle'
import Todos from '../components/modules/todos/Todos'

// contexts
import { appName, title } from '../contexts/AppBasicContext'

const TodosPage: NextPage = () => {
  const router = useRouter()
  return (
    <Layout title={title} appName={appName}>
      <div className='py-10'>
        {/* SubTitle */}
        <SubTitle title={'Todos'} />
      </div>
      <div className='py-10'>
        <Todos />
      </div>
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

export default TodosPage
