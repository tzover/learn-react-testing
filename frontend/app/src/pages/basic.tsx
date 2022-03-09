// components
import Layout from '../components/templates/Layout'
import Basic from '../components/modules/Basic'
import SubTitle from '../components/atoms/SubTitle'

// contexts
import { appName, title } from '../contexts/AppBasicContext'
import PageBackButton from '../components/atoms/PageBackButton'

// libs
import { fetchUsers } from '../libs/fetchUsers'

// models
import { UserIF } from '../models/user'

interface Props {
  users: UserIF[]
}

const BasicPage = (props: Props) => {
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
  console.log(response)
  return {
    props: {
      users: response?.slice(0, 3),
    },
  }
}
