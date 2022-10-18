import React from 'react';

const data = [
    {
        id: 1,
        src: "/images/collection1.png",
        title: "Limits",
        artist: "John watts",
    },
    {
        id: 2,
        src: "/images/collection2.png",
        title: "Limits",
        artist: "John watts",
    },
    {
        id: 3,
        src: "/images/collection3.png",
        title: "Limits",
        artist: "John watts",
    },
    {
        id: 4,
        src: "/images/collection4.png",
        title: "Limits",
        artist: "John watts",
    }
];

function List() {
  return (
      <div className='flex flex-col md:flex-row flex-wrap items-center gap-8 mt-10 lg:mt-8'>
          {data.map((item) => (
              <div key={item.id} className='w-full md:w-52 h-56 parent'>
                  <div className={`bg-[url("/images/collection1.png")] bg-no-repeat bg-cover w-full h-full rounded-[20px] border border-white/5 cursor-pointer child flex items-end`}>
                      <div className='flex flex-col gap-3 ml-5 mb-5'>
                          <h5 className='font-normal text-light text-2xl'>{item.title}</h5>
                          <p className='text-xs font-normal opacity-75 text-light'>{item.artist}</p>
                      </div>
                  </div>
                  </div>
        ))}
    </div>
  )
}

export default List;