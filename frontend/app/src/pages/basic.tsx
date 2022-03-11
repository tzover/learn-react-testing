import { NextPage } from 'next'

// models
import { UserIF } from '../models/user'

// contexts
import { appName, title } from '../contexts/AppBasicContext'

// libs
import { fetchUsers } from '../libs/fetchUsers'

// components
import Layout from '../components/templates/Layout'
import Basic from '../components/modules/Basic'
import SubTitle from '../components/atoms/SubTitle'
import PageBackButton from '../components/atoms/PageBackButton'

// interface
interface Props {
  users: UserIF[]
}

const BasicPage: NextPage<Props> = (props) => {
  const { users } = props
  return (
    <Layout title={title} appName={appName}>
      <div className='py-10'>
        {/* SubTitle */}
        <SubTitle title={'Basic'} />
      </div>
      {/* Main container */}
      <div className='px-12'>
        <Basic users={users} />
      </div>
      {/* Page back button Container */}
      <div className='py-10'>
        <PageBackButton />
      </div>
    </Layout>
  )
}

export default BasicPage

export const getStaticProps = async () => {
  const response = await fetchUsers()
  return {
    props: {
      users: response?.slice(0, 3),
    },
  }
}
