import type { NextPage } from 'next'

// contexts
import { appName, title } from '../contexts/AppBasicContext'

// components
import Layout from '../components/templates/Layout'
import SubTitle from '../components/atoms/SubTitle'
import Todos from '../components/modules/Todos'
import PageBackButton from '../components/atoms/PageBackButton'

const TodosPage: NextPage = () => {
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
        <PageBackButton />
      </div>
    </Layout>
  )
}

export default TodosPage
