import BtnEvent from './basic/BtnEvent'
import HoverEvent from './basic/HoverEvent'
import InputEvent from './basic/InputEvent'
import Testing from './basic/Testing'

const Basic = () => {
  return (
    <>
      <div className='flex flex-wrap'>
        <Testing testing='Rendering'>
          {/* text */}
          <div className='p-2 border-b-2'>
            <p>Testing message1</p>
            <p data-testid='msg'>Testing message2</p>
            <p data-testid='change-msg'>Testing message3</p>
          </div>
          {/* button */}
          <div className='p-2 border-b-2 flex flex-col'>
            <button className='w-1/4 p-1 my-2 border-2 hover:bg-pink-100'>
              Next
            </button>
            <button className='w-1/4 p-1 my-2 border-2 hover:bg-pink-100'>
              Back
            </button>
          </div>
          {/* input */}
          <div className='p-2 border-b-2 flex flex-col'>
            <input
              type='text'
              placeholder='testing'
              className='border-2 p-2 my-2'
            />
            <div className='p-2 my-2'>
              <input type='checkbox' />
              <label className='mx-2' htmlFor='checkbox'>
                checkbox
              </label>
            </div>
            <input type='range' min='0' max='10' className='p-2 my-2' />
          </div>
        </Testing>

        <Testing testing='Hooks'>Hoo</Testing>

        <Testing testing='Function'>Function</Testing>

        <Testing testing='Styling'>Styling</Testing>
      </div>
      <hr />
      <Testing testing='Mock'>Mock</Testing>
      <BtnEvent />
      <HoverEvent />
      <InputEvent />
    </>
  )
}

export default Basic
