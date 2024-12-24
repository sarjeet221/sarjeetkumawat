import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import icon from '@/assets/port_footer03.png'

export default function Projects() {

    const projectArray = [
        { "title": "Portfolio", "description": "this project made using the react and tailwind", "url": "/portfolio", "img": "" },
        { "title": "ClotheCompiler", "description": "this is a ecommmerce website that is build using react and bootstrap", "url": "/clothcompiler", "img": "" },
        { "title": "Nutritions", "description": "this is a nutrion web that porvide medicencd at hone this polateform create using multilple techbnolges", "url": "/nutritions", "img": "" },
    ]

    return (
        <div className='px-5 mt-5'>
            {/* <div className="menubar my-3 text-xl text-blue-400 flex space-x-6 justify-center">
            <Link href={""} title=''>All</Link>
            <Link href={""} title=''>Web</Link>
            <Link href={""} title=''>Figma</Link>
            <Link href={""} title=''>Node</Link>
            <Link href={""} title=''>React</Link>
        </div> */}

            <div className='grid lg:grid-cols-3 gap-5'>
                {projectArray.map((data: any, key: number) => {
                    return (
                        <div className='h-[250px] rounded bg-green-700 flex items-center justify-center relative group hover:shadow-[0px_12px_29px_0px_rgb(0,0,0,0.09)]' key={key}>
                            <Image src={icon} alt='' className='group-hover:scale-125 transition duration-300'></Image>
                            <div className='text-white absolute h-full w-full bg-transparesnt p-5 group-hover:flex hidden flex-col justify-end cursor-pointer bg-gradient-to-t from-black to-60% bg-bland-multiply'>
                                <h3 className='text-xl'>{data.title}</h3>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}
