import React from 'react'

function Buttons() {
  return (
      <div className='flex items-center gap-3 mt-12 lg:mt-0'>
          <div className='w-full md:w-32 bg-yellow py-2 flex items-center justify-center rounded-3xl text-dark font-normal text-sm'>My collection</div>
          <div className='w-full md:w-20 border border-light py-2 flex items-center justify-center rounded-3xl text-light font-normal text-sm opacity-25'>Likes</div>
    </div>
  )
}

export default Buttons;