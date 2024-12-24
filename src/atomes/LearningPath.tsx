import React, { ReactNode, useRef } from 'react'
import gsap from 'gsap';

const bgcolor = ['bg-[#ff517e]', 'bg-[#ffc454]', 'bg-[#ff754a]', 'bg-[#00c8da]', 'bg-[#87cefa]', 'bg-[#d8bfd8]', 'bg-[#ffcocb]', 'bg-[#faf0e6]',]
const aftercolor = ['after:bg-[#ff517e]', 'after:bg-[#ffc454]', 'after:bg-[#ff754a]', 'after:bg-[#00c8da]', 'after:bg-[#87cefa]', 'after:bg-[#d8bfd8]', 'after:bg-[#ffcocb]', 'after:bg-[#faf0e6]',]
const color = ['text-[#ff517e]', 'text-[#ffc454]', 'text-[#ff754a]', 'text-[#00c8da]', 'text-[#87cefa]', 'text-[#d8bfd8]', 'text-[#ffcocb]', 'text-[#faf0e6]',]
const bordercolor = ['border-[#ff517e]', 'border-[#ffc454]', 'border-[#ff754a]', 'border-[#00c8da]', 'border-[#87cefa]', 'border-[#d8bfd8]', 'border-[#ffcocb]', 'border-[#faf0e6]',]


function Yearcircle({ children, index }: { children: React.ReactNode, index:number }) {
    console.log("circle +++++++++++++++++++++++++++++++++++++", index)
    return (
        <div key={index} className={`lg:me-6 relative lg:h-[130px] lg:w-[130px] h-[100px] w-[100px] rounded-full border-[13px] ${bordercolor[index]} flex justify-center items-center ${color[index]} text-xl font-bold
        after:content-[''] after:block after:h-[15px] after:rounded-sm after:w-[15px] ${aftercolor[index]} after:absolute lg:after:end-[-19px] after:z-[-3] lg:after:top-0 lg:after:bottom-0 after:my-auto after:rotate-45 smlmax:after:bottom-[-19px]
        before:bg-green-300 smlmax:before:hidden before:content-[''] before:block before:h-[15px] before:rounded-full before:w-[15px] before:border-2 before:border-green-400 before:absolute before:end-[-45px] before:top-0 before:bottom-0 before:my-auto

    `}>
            <p>{children}</p>
        </div>
    )
}
function Locationstrip({ children, index }: { children: React.ReactNode, index: number }) {
    return (
        <div key={index} className={`my-2 relative h-[40px] w-full flex items-center ${color[index]} text-xl font-bold shadow-[0px_3px_12px_rgba(0,0,0,0.09)]
        after:content-[''] after:block after:h-[13px] after:rounded-sm after:w-[13px] after:bg-white-400 after:absolute after:start-[-7px] after:z-[-3] after:top-0 after:bottom-0 after:my-auto after:rotate-45 after:shadow-[0px_3px_12px_rgba(0,0,0,0.09)]
    `}>
            <div className='bg-[white] min-w-[80px] flex justify-center items-center h-full'>0{index+1}</div>
            <div className={`${bgcolor[index]} w-full flex justify-center items-center h-full text-white`}>{children}</div>

        </div>
    )
}
function EducationDescription({ title, description, location, index }: { title: string, description: string, index: number, location: string }) {
    const boxRef =  useRef(null);
    const handleMouseEnter = () => {
      gsap.to(boxRef?.current, { y: -15, duration: 0.5 });
    };
    const handleMouseLeave = () => {
      gsap.to(boxRef?.current, { y: 0, duration: 0.5 });
    };
    return (
        <div ref={boxRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`lg:ms-[53px] my-2 relative p-6 lg:w-[400px] w-full flex justify-center items-center ${color[index]} text-base font-bold shadow-[0px_3px_12px_rgba(0,0,0,0.09)]`}>
            <div className='absolute lg:-start-[2.5rem] top-[-30px] w-[80%]'>
                <Locationstrip index={index}>{location}</Locationstrip>
            </div>
            <h3>{title}</h3>
            {description}
        </div>
    )
}



export default function LearningPath() {

    const learning = [
        { "srno": 0, "location": "Jaipur", "year": "2024", "title": "M.Sc. IT", "description": "not apa" },
        { "srno": 1, "location": "jhunjhunu", "year": "2021", "title": "B.Sc.", "description": "nana" },
        { "srno": 2, "location": "jhunjhunu", "year": "2018", "title": "SR. Secondary", "description": "nanaa" },
        { "srno": 3, "location": "jhunjhunu", "year": "2016", "title": "Secondary", "description": "nanan" },
    ]


    return (
        <div className="relative w-full smlmax:px-5 after:content-[''] after:hidden after:lg:block after:h-full after:w-[2px] after:bg-green-300 after:absolute after:start-0 after:end-0 after:z-[-3] after:top-0 after:mx-auto
        ">
            {
                learning.map((data: any, key: number) => {
                    return (
                        <div className='sml:flex lg:mb-[100px] mb-10 lgmax:!justify-center' key={key} dir={key % 2 !==0 ? "rtl" :"ltr"}>
                            <div className='lg:basis-1/2 flex sml:justify-end justify-center items-center smlmax:mb-12'>
                                <Yearcircle index={data.srno}>{data.year}</Yearcircle>

                            </div>
                            <div className='lg:basis-1/2 flex sml:justify-start justify-center'>
                                <EducationDescription title={data.title} description={data.description} location={data.location} index={data.srno} />

                            </div>
                        </div>
                    )
                })

            }

        </div>


    )
}
