import React from 'react'
import Link from 'next/link'

const Navigation = () => {
  const navMenus = ['top', 'page-1', 'page-2', 'page-3']
  return (
    <div className='flex flex-col px-10 fixed bottom-10 w-full'>
      <div className='text-right pr-72'>
        <h2 className='text-2xl'>
          <span className='border-b-2'>Link Navigations</span>
        </h2>
      </div>
      <div className='flex flex-row gap-10 p-3 justify-end'>
        {navMenus.map((menu) => (
          <div className='hover:bg-blue-300 cursor-pointer p-3' key='menu'>
            <Link href='/'>{menu}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navigation
