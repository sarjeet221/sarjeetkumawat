import Image from 'next/image'
import React from 'react'

export default function SidebarmenuTab({title, link, img}:{title:string, link:string, img:string}) {
  return (
    <div className='h-[80px] hover:bg-[#eee] flex flex-col	items-center justifiy-center group w-full cursor-pointer'>
            <Image src={img as string} width={50} height={50} alt='test'  />
        <div>            
        </div>
        
        <div className='group-hover:text-[blue]'>
            {title}
        </div>

    </div>
  )
}
