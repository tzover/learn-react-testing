import type { NextPage } from 'next'

// components
import Layout from '../components/templates/Layout'
import Basic from '../components/modules/Basic'
import SubTitle from '../components/atoms/SubTitle'

// contexts
import { appName, title } from '../contexts/AppBasicContext'
import PageBackButton from '../components/atoms/PageBackButton'

const BasicPage: NextPage = () => {
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
        <PageBackButton />
      </div>
    </Layout>
  )
}

export default BasicPage
