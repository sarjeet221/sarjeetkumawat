"use client"
import Sidebar from "@/organism/Sidebar";
import MainSection from "@/organism/MainSection";
import GoToTopButton from "@/atomes/GoToTop";
// import { RiMenuAddLine } from "react-icons/ri";
// import { useState } from "react";


export default function Home() {



  return (
    <div className="relative ">
      <MainSection />
      <Sidebar />
      <GoToTopButton />
    </div>
  );
}
