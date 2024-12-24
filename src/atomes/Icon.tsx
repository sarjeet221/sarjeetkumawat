import React from 'react'

export default function Icon({children,text}:{children:any, text:string}) {
  return (
    // <div className='bg-[#eee] p-4 justify-center itmes-center after:content-[""] after:h-[2px] after:w-[20px] after:block after:bg-[red]'>
    <div className="p-4 text-center justify-center items-center relative
    hover:bg-[#ddd] group cursor-pointer
    after:content-[''] after:h-[1px] after:w-[70%] after-mt-2 after:block after:bg-red-500 after:m-auto">

        <div className='text-2xl text-[green] flex justify-center'>{children}</div>
        <div className='opacity-0 group-hover:opacity-100 font-semibold capitalize py-2 text-green-500 transition'>{text}</div>
    </div>
  )
}
