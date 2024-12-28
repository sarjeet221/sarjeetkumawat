import React from 'react'
import Image from 'next/image'
import front from '@/assets/ui-design.png'
import api from '@/assets/cloud-api.png'
import maintain from '@/assets/technical-support.png'

export default function Services() {

    const serviceslist = [
        { "title": "Frontend Development", "description": "Creating responsive and dynamic user interfaces using React.js.", "icon": front },
        { "title": "Troubleshooting and Maintenance", "description": "Debugging issues, fixing bugs, and ensuring smooth performance.Providing post-deployment support and updates.", "icon": maintain },
        { "title": "API Integration", "description": "Fetching, sending, and managing data from RESTful or GraphQL APIs using tools like Axios or Apollo Client.", "icon": api },
    ]

    return (
        <div className='grid sml:grid-cols-2 lg:grid-cols-3 gap-5 px-5 max-w-[1700px] mx-auto'>

            {
                serviceslist.map((data: any, key: number) => {
                    return (
                        <div key={key} className='flex flex-col hover:shadow-[0px_12px_29px_0px_rgb(0,0,0,0.09)] hover:!border-[#00000000] transition p-7 cursor-pointer'>
                            <div className='h-[70px] text-center'>
                                <Image src={data.icon} alt={data.title} height={512} width={512} className='m-auto h-full w-auto'></Image>
                            </div>
                            <div className='mt-5 text-start'>
                                <h4 className="text-xl leading-none pb-4 font-semibold relative flex justify-center text-center
                                after:content-[''] after:block after:h-[2px] after:w-[125px] after:bg-green-300 after:absolute  after:bottom-0">
                                    {data.title}
                                </h4>
                                {/* <p className='text-base font-medium mt-3'>
                                    {data.description}
                                </p> */}
                            </div>
                        </div>

                    )
                })
            }           


        </div>
    )
}
