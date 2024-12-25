import Sidebar from "@/organism/Sidebar";
import MainSection from "@/organism/MainSection";
import { RiMenuAddLine } from "react-icons/ri";
// import { useState } from "react";


export default function Home() {

// const [menuba,setmenubar] = useState<boolean>();

  return (
    <div className="relative">
      <Sidebar />
      <MainSection />
      <div className="menu fixed top-0 end-0 text-2xl z-10">
      <RiMenuAddLine />
      </div>
    </div>
  );
}
