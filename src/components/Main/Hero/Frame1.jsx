import React from 'react'
import Charts from './Sub/Charts';
import Hero from './Sub/Hero';

function Frame1() {
  return (
      <div className='flex flex-col lg:flex-row mt-8 lg:mt-2'>
          <Hero />
          <Charts />
    </div>
  )
}

export default Frame1;