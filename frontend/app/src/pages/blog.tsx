import type { NextPage } from 'next'

// components
import Layout from '../components/templates/Layout'
import SubTitle from '../components/atoms/SubTitle'

// contexts
import { appName, title } from '../contexts/AppBasicContext'
import PageBackButton from '../components/atoms/PageBackButton'

const Blog: NextPage = () => {
  return (
    <Layout title={title} appName={appName}>
      <div className='py-10'>
        {/* SubTitle */}
        <SubTitle title={'Blog'} />
      </div>
      <div className='py-10'>Coming soon...</div>
      <div className='py-10'>
        <PageBackButton />
      </div>
    </Layout>
  )
}

export default Blog
