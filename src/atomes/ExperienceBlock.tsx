import Link from 'next/link'
import React from 'react'

export default function ExperienceBlock() {
  const experiance = [
    { "organization": "ubuy", "position": "React develper", "description": "this is descfipjkasdlkhs kjhv hi ufkh uter ityf jyrfbiyt doyt diytdf iygc oy", "duration": { "join": { "month": "june", "year": "2024" }, "resign": { "month": "june", "year": "2024" } } },
    { "organization": "amazon", "position": "fontend developer", "description": "jlfakhfdkjhakdjhfkasdhfk kjhdf yf yfi fotdfiytdkh iytd yt oytdiyt fid itd ohgfihdkl fad", "duration": { "join": { "month": "june", "year": "2024" }, "resign": { "month": "june", "year": "2024" } } },
    { "organization": "amazon", "position": "fontend developer", "description": "jlfakhfdkjhakdjhfkasdhfk kjhdf yf yfi fotdfiytdkh iytd yt oytdiyt fid itd ohgfihdkl fad", "duration": { "join": { "month": "june", "year": "2024" }, "resign": { "month": "june", "year": "2024" } } },
    { "organization": "flipkart", "position": "ui developer", "description": "kjugsd fakjhgkajsdf sdjdfgsjjkfh uyf uyfo uyfouyf oytf oyt ouy ouy ouyrouyfrotdou", "duration": { "join": { "month": "june", "year": "2024" }, "resign": { "month": "june", "year": "2024" } } },
  ]

    const bgcolor = ['bg-[#ff517e]', 'bg-[#ffc454]', 'bg-[#ff754a]', 'bg-[#00c8da]', 'bg-[#87cefa]', 'bg-[#d8bfd8]', 'bg-[#ffcocb]', 'bg-[#faf0e6]',]
    const aftercolor = ['after:bg-[#ff517e]', 'after:bg-[#ffc454]', 'after:bg-[#ff754a]', 'after:bg-[#00c8da]', 'after:bg-[#87cefa]', 'after:bg-[#d8bfd8]', 'after:bg-[#ffcocb]', 'after:bg-[#faf0e6]',]
    const color = ['text-[#ff517e]', 'text-[#ffc454]', 'text-[#ff754a]', 'text-[#00c8da]', 'text-[#87cefa]', 'text-[#d8bfd8]', 'text-[#ffcocb]', 'text-[#faf0e6]',]


  return (
    <div className='grid lg:grid-cols-2 gap-5 px-5'>
      {experiance.map((data: any, key: number) => {
        return (
          <div className={`sml:flex smlmax:space-y-3 w-full`} dir={key % 4 == 2 || key % 4 == 3 ? "rtl" : ""} key={key}>
            <div className={`lg:px-9 lg:py-4 p-3 relative ${bgcolor[key]} shadow-md text-center text-white shadow-md sml:me-3
              after:content-[''] after:block after:h-[15px] after:rounded-sm after:w-[15px] ${aftercolor[key]} after:absolute sml:after:end-[-7px] after:z-[-3] sml:after:top-0 after:bottom-0 smlmax:after:bottom-[-7px] smlmax:satrt-4 after:my-auto after:rotate-45`}>
              <div className='lg:text-[42px] text-[22px]'>{data.duration.join.year}</div>
              <div className='whitespace-nowrap text-xl'> {data.duration.join.month} to {data.duration.resign.month}</div>
              <div className='lg:text-[42px] text-[22px]'>{data.duration.resign.year}</div>
            </div>
            <div className='p-4 shadow-md grid shadow-lg items-center grid-rows-2 text-left'>
              <div className=' mb-2 flex flex-col justify-evenly h-full'>
                <h2 className='text-[28px] font-medium leading-none capitalize'>{data.position}</h2>
                <h3 className={`text-base font-semibold ${color[key]}`}>{data.organization}</h3>
              </div>
              <div className='border-t border-[#ccc] pt-1'>
                {data.description}<br />
                <Link href={"#"} title='read more' className='text-blue-400 font-semibold text-base w-min whitespace-nowrap'>Read more</Link>

              </div>
            </div>
          </div>
        )
      })

      }

    </div>
  )
}
