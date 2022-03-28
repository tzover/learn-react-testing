import Image from 'next/image'

// models
import { UserIF } from '../../models/user'

// components
import Testing from './basic/Testing'
import RouterEvent from './basic/RouterEvent'
import InputStateEvent from './basic/InputStateEvent'
import FetchEvent from './basic/FetchEvent'
import InputRefEvent from './basic/InputRefEvent'
import PropsButton from './basic/PropsButton'
import GlobalState from './basic/GlobalState'
import Styling from './basic/Styling'

// interface
interface Props {
  users: UserIF[]
}

const Basic = (props: Props) => {
  const { users } = props

  return (
    <>
      <div className='flex flex-wrap'>
        <Testing testing='Rendering'>
          {/* text */}
          <div className='border-b-2 p-2'>
            <p>Testing message1</p>
            <p data-testid='msg'>Testing message2</p>
            <p data-testid='change-msg'>Testing message3</p>
          </div>
          {/* button */}
          <div className='flex flex-col border-b-2 p-2'>
            <button className='w-1/4 p-1 my-2 border-2 hover:bg-pink-100'>
              Next1
            </button>
            <button className='w-1/4 p-1 my-2 border-2 hover:bg-pink-100'>
              Next2
            </button>
            <button
              type='button'
              className='w-1/4 p-1 my-2 border-2 bg-gray-400'
              disabled
            >
              disabled
            </button>
            <PropsButton btnName='NamePropsButton' />
          </div>
          {/* image */}
          <div className='border-b-2 p-2'>
            <Image
              src={'/vercel.svg'}
              width={100}
              height={100}
              alt={'test_img'}
              data-testid='test_img'
            />
          </div>
          {/* input */}
          <div className='flex flex-col border-b-2 p-2'>
            <input
              type='text'
              placeholder='testing'
              className='border-2 p-2 my-2'
              data-testid='test_input_sample'
            />
            <div className='p-2 my-2'>
              <input type='checkbox' />
              <label className='mx-2' htmlFor='checkbox'>
                checkbox
              </label>
            </div>
            <input type='range' min='0' max='10' className='py-2 my-2' />
          </div>
        </Testing>

        <Testing testing='Hooks and Function'>
          <InputStateEvent />
          <InputRefEvent />
          <RouterEvent />
          <FetchEvent users={users} />
        </Testing>

        <div className='flex-1'>
          <Testing testing='GlobalState'>
            <GlobalState />
          </Testing>
          <div className='mt-28'>
            <Testing testing='Styling'>
              <Styling />
            </Testing>
          </div>
        </div>
      </div>
    </>
  )
}

export default Basic
