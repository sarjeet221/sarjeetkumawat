"useclient"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
    const [category, setCategory] = useState<string>("fullstack");

    const projectArray = [
        { "cat": "fullstack", "title": "Ubuy Nodejs", "url": "https://www.u-buy.tv/en/", "img": "https://res.cloudinary.com/dbppydtzh/image/upload/v1744890850/pk_ubuy_bsuo5l.png", "description": "Technologies Used: React.js, Node.js, TypeScript, Tailwind CSS, Next.js, Redux, RESTful APIs. Implemented a responsive, high-performance UI for an international e-commerce platform.", },
        { "cat": "fullstack", "title": "CityRides", "url": "https://www.cityrides.site/", "img": "https://res.cloudinary.com/dbppydtzh/image/upload/v1744891472/cityrides_laptop_kaiark.png", "description": "Implemented secure user authentication, role-based access, allows users to read , and manage blogs", },
        { "cat": "react", "title": "Clotecompiler", "url": "https://clothcompiler.vercel.app/", "img": "https://res.cloudinary.com/dbppydtzh/image/upload/v1744891474/clothcompiler_zdebjn.png", "description": "Cloth compiler is a e-commerce website", },
        { "cat": "next", "title": "Portfolio", "url": "https://www.ubuy.co.in/", "img": "https://res.cloudinary.com/dbppydtzh/image/upload/v1744892256/portfolio_hxgf9h.png", "description": "Developed a modern, fully responsive personal portfolio website to showcase professional skills", },
        { "cat": "html", "title": "Ulabs", "url": "https://ulabs.ubuy.com/", "img": "https://res.cloudinary.com/dbppydtzh/image/upload/v1744890853/ulabs_lkbxdj.png", "description": "Ulabs is an AI-powered e-commerce platform by Ubuy. I developed the complete frontend, delivering a responsive and intuitive user interface.", },
        { "cat": "html", "title": "Ubuy", "url": "https://www.ubuy.co.in/", "img":"https://res.cloudinary.com/dbppydtzh/image/upload/v1744890852/ubuy_ylbdsc.png", "description": "This project build using php js html scss", },
        { "cat": "html", "title": "tutionwalaz", "url": "https://sarjeet221.github.io/tution/", "img":"https://res.cloudinary.com/dbppydtzh/image/upload/v1744896137/tutionwalaz_rxcs5s.png", "description": "Unlock Your Potential with Personalized Tutoring", },
        // { "cat": "html", "title": "Old Portfolio", "url": "https://sarjeet221.github.io/portfolio/", "img":"https://res.cloudinary.com/dbppydtzh/image/upload/v1744896612/personal_portfolio_old_qupkbo.png", "description": "Personal Portfolio using html and css", },
        // { "cat": "js", "title": "transportaino", "url": "https://www.ubuy.co.in/", "img": "https://res.cloudinary.com/dbppydtzh/image/upload/v1744892256/portfolio_hxgf9h.png", "description": "This project build using php js html scss", },
    ]

    const filteredProject = projectArray.filter((data) => category == data.cat);

    return (
        <div className='px-5 mt-5 max-w-[1700px] mx-auto'>
            <ul className='mt-3 mb-6 text-xl text-green-400 flex gap-6 justify-center p-0'>
                <li onClick={() => setCategory("fullstack")} className={`list-none cursor-pointer hover:text-blue-400 ${category == "fullstack" ? "text-blue-400" : ""}`}>Full Stack</li>
                <li onClick={() => setCategory("next")} className={`list-none cursor-pointer hover:text-blue-400 ${category == "next" ? "text-blue-400" : ""}`}>Next</li>
                <li onClick={() => setCategory("react")} className={`list-none cursor-pointer hover:text-blue-400 ${category == "react" ? "text-blue-400" : ""}`}>React</li>
                <li onClick={() => setCategory("html")} className={`list-none cursor-pointer hover:text-blue-400 ${category == "html" ? "text-blue-400" : ""}`}>Html</li>
                <li onClick={() => setCategory("all")} className={`list-none cursor-pointer hover:text-blue-400 ${category == "all" ? "text-blue-400" : ""}`}>All</li>
            </ul>

            <div className='grid sml:grid-cols-2 lg:grid-cols-3 gap-5'>
                {category && (category == "all" ? projectArray :filteredProject).map((data: any, key: number) => {
                    return (
                        <Link href={data.url} className='rounded bg-[#000] max-w-[400px] m-auto flex items-center justify-center relative group hover:shadow-[0px_12px_29px_0px_rgb(0,0,0,0.09)] overflow-hidden' key={key}>
                            <Image src={`${data.img}`} alt='' width={1920} height={1080} className='group-hover:scale-[1.08] transition duration-500 m-auto max-h-[215px]'></Image>
                            <div className='text-white absolute h-full w-full bg-transparesnt p-5 group-hover:opacity-100 flex opacity-0 transition duration-500 flex-col justify-end cursor-pointer bg-gradient-to-t from-black to-90% bg-bland-multiply'>
                                <h3 className='text-xl font-semibold'>{data.title}</h3>
                                <p className='leading-4 text-white'>{data.description}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}


