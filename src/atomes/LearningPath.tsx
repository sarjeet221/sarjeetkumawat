import React, {useRef } from 'react'
import gsap from 'gsap';

const bgcolor = ['bg-[#ff517e]', 'bg-[#ffc454]', 'bg-[#ff754a]', 'bg-[#00c8da]', 'bg-[#87cefa]', 'bg-[#d8bfd8]', 'bg-[#ffcocb]', 'bg-[#faf0e6]',]
const aftercolor = ['after:bg-[#ff517e]', 'after:bg-[#ffc454]', 'after:bg-[#ff754a]', 'after:bg-[#00c8da]', 'after:bg-[#87cefa]', 'after:bg-[#d8bfd8]', 'after:bg-[#ffcocb]', 'after:bg-[#faf0e6]',]
const color = ['text-[#ff517e]', 'text-[#ffc454]', 'text-[#ff754a]', 'text-[#00c8da]', 'text-[#87cefa]', 'text-[#d8bfd8]', 'text-[#ffcocb]', 'text-[#faf0e6]',]
const bordercolor = ['border-[#ff517e]', 'border-[#ffc454]', 'border-[#ff754a]', 'border-[#00c8da]', 'border-[#87cefa]', 'border-[#d8bfd8]', 'border-[#ffcocb]', 'border-[#faf0e6]',]


function Yearcircle({ children, index }: { children: React.ReactNode, index:number }) {
    return (
        <div key={index} className={`lg:me-6 relative lg:h-[130px] lg:w-[130px] h-[100px] w-[100px] rounded-full border-[13px] ${bordercolor[index]} flex justify-center items-center ${color[index]} text-xl font-bold
        after:content-[''] after:block after:h-[15px] after:rounded-sm after:w-[15px] ${aftercolor[index]} after:absolute md:after:end-[-19px] after:z-[-3] md:after:top-0 md:after:bottom-0 after:my-auto after:rotate-45 mdmax:after:bottom-[-19px]
        before:bg-green-300 mdmax:before:hidden before:content-[''] before:block before:h-[15px] before:rounded-full before:w-[15px] before:border-2 before:border-green-400 before:absolute before:end-[-45px] before:top-0 before:bottom-0 before:my-auto

    `}>
            <p className={color[index]}>{children}</p>
        </div>
    )
}
function Locationstrip({ children, index }: { children: React.ReactNode, index: number }) {
    return (
        <div key={index} className={`my-2 relative h-[40px] w-full flex items-center ${color[index]} text-xl font-bold shadow-[0px_3px_12px_rgba(0,0,0,0.09)]
        after:content-[''] after:block after:h-[13px] after:rounded-sm after:w-[13px] after:bg-white-400 after:absolute after:start-[-7px] after:z-[-3] after:top-0 after:bottom-0 after:my-auto after:rotate-45 after:shadow-[0px_3px_12px_rgba(0,0,0,0.09)]
    `}>
            <div className='bg-[white] min-w-[80px] flex justify-center items-center h-full'>0{index+1}</div>
            <div className={`${bgcolor[index]} w-full flex justify-center items-center h-full text-white capitalize`}>{children}</div>

        </div>
    )
}
function EducationDescription({ title, description, location, index, institute }: { title: string, description: string, index: number, location: string, institute:string }) {
    const boxRef =  useRef(null);
    const handleMouseEnter = () => {
      gsap.to(boxRef?.current, { y: -15, duration: 0.5 });
    };
    const handleMouseLeave = () => {
      gsap.to(boxRef?.current, { y: 0, duration: 0.5 });
    };
    return (
        <div ref={boxRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`lg:ms-[53px] my-2 relative p-6 lg:w-[400px] w-full text-left shadow-[0px_3px_12px_rgba(0,0,0,0.09)]`}>
            <div className='absolute lg:-start-[2.5rem] top-[-30px] w-[80%]'>
                <Locationstrip index={index}>{location}</Locationstrip>
            </div>
            <h3 className='text-xl mt-2 mb-1 font-semibold'>{title}</h3>
            <h4 className=''>{institute}</h4>
            <p>{description}</p>
           
        </div>
    )
}



export default function LearningPath() {

    const learning = [
        { "srno": 0, "institute":"S.S. Jain Subodh PG College", "location": "Jaipur", "year": "2024", "title": "M.Sc. IT", "description": "Advanced studies in IT, focusing on software development, data management, and emerging technologies, providing expertise in practical and theoretical aspects of computing." },
        { "srno": 1, "institute":"S.V. Govt PG College", "location": "Khetri", "year": "2021", "title": "Bachelor of Science", "description": "A broad foundation in scientific principles and methodologies, developing analytical and problem-solving skills across multiple disciplines." },
        { "srno": 2, "institute":"Govt. SR. Sec. School", "location": "Khetri Nagar", "year": "2018", "title": "SR. Secondary", "description": "Specialized in core subjects related to science, building a foundation for higher education" },
        { "srno": 3, "institute":"Govt. SR. Sec. School", "location": "Manota Kalan", "year": "2016", "title": "Secondary", "description": "Completed foundational education with a strong emphasis on core subjects, setting the stage for further academic and professional growth." },
    ]


    return (
        <div className="relative w-full smlmax:px-5 max-w-[1700px] mx-auto grid lg:gap-[100px] gap-10
        after:content-[''] after:hidden after:lg:block after:h-full after:w-[2px] after:bg-green-300 after:absolute after:z-[-3] after:top-0 after:left-0 after:right-0 after:m-auto
        ">
            {
                learning.map((data: any, key: number) => {
                    return (
                        <div className='flex mdmax:flex-col mdmax:!max-w-[550px] lgmax:max-w-[700px] w-full lgmax:mx-auto lgmax:!justify-center' key={key} dir={key % 2 !==0 ? "rtl" :"ltr"}>
                            <div className='lg:basis-1/2 basis-1/3 flex md:justify-end justify-center items-center mdmax:mb-12 smlmax:!pe-0 lgmax:pe-12'>
                                <Yearcircle index={data.srno}>{data.year}</Yearcircle>

                            </div>
                            <div className='lg:basis-1/2 basis-2/3 flex sml:justify-start justify-center'>
                                <EducationDescription title={data.title} institute={data.institute} description={data.description} location={data.location} index={data.srno} />

                            </div>
                        </div>
                    )
                })

            }

        </div>


    )
}
