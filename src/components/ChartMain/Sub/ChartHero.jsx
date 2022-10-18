import React from 'react'

function ChartHero() {
  return (
      <div className='flex flex-col md:flex-row md:items-end gap-6 mt-10 lg:mt-0'>
          <div className='pr-10 md:pr-0'>
              <img className='w-full' src="/images/Lead-image.png" alt="lead" />
          </div>
          <div className='flex flex-col gap-8 md:gap-10 pr-10 md:pr-0 md:pb-3'>
              <div className='flex flex-col gap-3'>
                  <h5 className='text-[#A4C7C6] text-4xl font-bold'>Tomorrow’s tunes</h5>
                  <p className='text-light font-normal text-sm md:w-3/4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                  <p className='text-light font-normal text-sm'>64 songs ~ 16 hrs+</p>
              </div>
              <div className='flex items-center gap-4'>
                  <div className='flex items-center gap-2 bg-white/5 w-[87px] rounded-[32px] py-2 justify-center'>
                      <img src="/images/playb.png" alt="play" />
                      <p className='text-xs font-normal text-white'>Play all</p>
                  </div>
                  <div className='flex items-center gap-2 justify-center bg-white/5 w-[151px] rounded-[32px] py-2'>
                      <img src="/images/music-square-add.png" alt="music-add-icon" />
                      <p className='text-xs font-normal text-white'>Add to collection</p>
                  </div>
                  <div className='flex items-center gap-2 justify-center w-[96px] md:w-9 h-9 rounded-[32px] bg-white/5'>
                      <img src="/images/heartb.png" alt="heart" />
                      <p className='md:hidden text-xs font-normal text-white'>Like</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default ChartHero;