"use client"
import Sidebar from "@/organism/Sidebar";
import MainSection from "@/organism/MainSection";
import GoToTopButton from "@/atomes/GoToTop";
// import { RiMenuAddLine } from "react-icons/ri";
import { AppProvider } from "@/context/Appcontext";


export default function Home() {



  return (
    <AppProvider>
      <div className="relative ">
      <MainSection />
      <Sidebar />
      <GoToTopButton />
    </div>
    </AppProvider>
    
  );
}
