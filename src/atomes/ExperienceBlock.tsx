import React, { useState } from 'react';
import { GrCertificate } from "react-icons/gr";

function download(certificate: string) {
  const link = document.createElement("a");
  link.href = certificate; 
  link.download = "Certificate.pdf"; 
  link.click();
};
export default function ExperienceBlock() {
  const experiance = [
    {
      srno: 0,
      organization: "Ubuy Technologies, Jaipur", position: "Frontend Developer", duration: {
        join: { month: "Jun", year: "2024" },resign: { month: "Dec", year: "2024" },
      },
      description:
        "I collaborate on Ubuy's core Node.js-based and PHP-based projects, ensuring seamless integration between user interfaces and backend systems",
        certificate:"/ubuy certificate.pdf",

    },
    {
      srno: 1,
      organization: "RAT Pvt. Ltd, Jaipur", position: "React Internship", duration: {
        join: { month: "Mar", year: "2024" },resign: { month: "May", year: "2024" },
      },
      description:
        "I gained hands-on experience building dynamic, responsive web applications using React.js",
        certificate:"/rat certificate.pdf",
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-y-10 gap-x-5 px-5 max-w-[1700px] mx-auto">
      {experiance.map((data, index) => (
        <Experienceunit key={index} {...data} />
      ))}
    </div>
  );
}

function Experienceunit({
  srno,
  organization,
  position,
  duration,
  description,
  certificate,
}: {
  srno: number;
  organization: string;
  position: string;
  duration: {
    join: { month: string; year: string };
    resign: { month: string; year: string };
  };
  description: string;
  certificate:string;
}) {
  const bgcolor = ["bg-[#ff517e]","bg-[#ffc454]","bg-[#ff754a]","bg-[#00c8da]","bg-[#87cefa]","bg-[#d8bfd8]","bg-[#ffcocb]","bg-[#faf0e6]",];
  const aftercolor = ["after:bg-[#ff517e]","after:bg-[#ffc454]","after:bg-[#ff754a]","after:bg-[#00c8da]","after:bg-[#87cefa]","after:bg-[#d8bfd8]","after:bg-[#ffcocb]","after:bg-[#faf0e6]",];
  const color = ["text-[#ff517e]","text-[#ffc454]","text-[#ff754a]","text-[#00c8da]","text-[#87cefa]","text-[#d8bfd8]","text-[#ffcocb]","text-[#faf0e6]",];
  
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className={`sml:flex smlmax:space-y-3 w-full lgmax:max-w-[600px] mx-auto hover:-translate-y-1`}
      dir={srno % 4 === 2 || srno % 4 === 3 ? "rtl" : ""}
    >
      <div
        className={`lg:px-9 lg:py-4 lgmax:basis-1/3 content-center p-3 relative ${bgcolor[srno]} shadow-md text-center text-white shadow-md sml:me-3
        after:content-[''] after:block after:h-[15px] after:rounded-sm after:w-[15px] ${aftercolor[srno]} after:absolute sml:after:end-[-7px] after:z-[-3] sml:after:top-0 after:bottom-0 smlmax:after:bottom-[-7px] smlmax:satrt-4 after:my-auto after:rotate-45`}
      >
        <div className="lg:text-[42px] text-[28px]">{duration.join.year}</div>
        <div className="whitespace-nowrap text-xl">
          {duration.join.month} to {duration.resign.month}
        </div>
        <div className="lg:text-[42px] text-[28px]">{duration.resign.year}</div>
      </div>
      <div className="p-4 shadow-md grid shadow-lg lgmax:basis-2/3 items-center grid-rows-2 text-left">
        <div className=" mb-2 flex flex-col justify-evenly h-full relative">
          <h2 className="text-xl font-semibold w1200:text-2xl leading-none capitalize">
            {position}
          </h2>
          <h3 className={`text-base font-semibold capitalize ${color[srno]}`}>
            {organization}
          </h3>
          <div  onClick={() => download(certificate)}  className='text-xl absolute top-1 cursor-pointer end-2 p-1'><GrCertificate/></div>
        </div>
        <div className="border-t border-[#ccc] text-[#777777] relative pt-1">
          <span className="h-[45px] overflow-hidden block whitespace-wrap">
            {description}
          </span>
          <span onClick={toggleModal} title="read more"
            className="text-blue-400 cursor-pointer font-semibold text-base w-min whitespace-nowrap">
            Read more
          </span>
          <div
            className={`${isOpen ? "block" : "hidden"} thin_scrollbar  absolute bg-blue-100 z-[10] w-full h-full text-center p-4 top-[10%] left-0 max-h-[80vh] md:max-w-[50vw] max-w-[90vw] overflow-auto right-0 m-auto`}>
            <p>{description}</p>
            <button onClick={toggleModal} className="px-2 mt-1 py-1 bg-white rounded">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
