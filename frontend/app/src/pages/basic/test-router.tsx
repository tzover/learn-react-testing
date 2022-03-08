import { useRouter } from 'next/router'

// components
import Layout from '../../components/templates/Layout'
import PageBackButton from '../../components/atoms/PageBackButton'

// contexts
import { appName, title } from '../../contexts/AppBasicContext'

const RouterTest = () => {
  const router = useRouter()
  return (
    <Layout title={title} appName={appName}>
      <p className='text-2xl font-bold text-center'>{router.query.msg}</p>
      {/* Page back button Container */}
      <div className='py-10'>
        <PageBackButton />
      </div>
    </Layout>
  )
}

export default RouterTest
