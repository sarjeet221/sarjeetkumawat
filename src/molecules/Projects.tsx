import React from 'react'
import Image from 'next/image'
import ubuy from '@/assets/ubuy.png'
import ulabs from '@/assets/ulabs.png'
import pkubuy from '@/assets/pk ubuy.png'

export default function Projects() {

    const projectArray = [
        { "title": "Portfolio", "description": "this project made using the react and tailwind", "url": "/portfolio", "img": ubuy },
        { "title": "ClotheCompiler", "description": "this is a ecommmerce website that is build using react and bootstrap", "url": "/clothcompiler", "img": ulabs },
        { "title": "Nutritions", "description": "this is a nutrion web that porvide medicencd at hone this polateform create using multilple techbnolges", "url": "/nutritions", "img": pkubuy },
    ]

    return (
        <div className='px-5 mt-5 max-w-[1700px] mx-auto'>
            {/* <div className="menubar my-3 text-xl text-blue-400 flex space-x-6 justify-center">
            <Link href={""} title=''>All</Link>
            <Link href={""} title=''>Web</Link>
            <Link href={""} title=''>Figma</Link>
            <Link href={""} title=''>Node</Link>
            <Link href={""} title=''>React</Link>
         </div> */}

            <div className='grid sml:grid-cols-2 lg:grid-cols-3 gap-5'>
                {projectArray.map((data: any, key: number) => {
                    return (
                        <div className='rounded bg-[#000] max-w-[400px] m-auto flex items-center justify-center relative group hover:shadow-[0px_12px_29px_0px_rgb(0,0,0,0.09)] overflow-hidden' key={key}>
                            <Image src={data.img} alt='' width={1920} height={1080} className='group-hover:scale-[1.08] transition duration-500 m-auto'></Image>
                            <div className='text-white absolute h-full w-full bg-transparesnt p-5 group-hover:opacity-100 flex opacity-0 transition duration-500 flex-col justify-end cursor-pointer bg-gradient-to-t from-black to-60% bg-bland-multiply'>
                                <h3 className='text-xl'>{data.title}</h3>
                                <p className='leading-4'>{data.description}</p>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}
