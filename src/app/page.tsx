"use client"

import Image from "next/image";
import { Poppins } from "next/font/google";
import { SliderLeft, SliderRight } from "../components/custom/Slider";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"], // Add the weights you need
});

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Home() {
  const [burgerOpen, setBurgerOpen] = useState(false);


  return (
    <div className={`relative bg-[#F9F5F2] min-h-screen ${poppins.className} text-black overflow-hidden`}>
      <div className="2xl:mx-[10%] xl:mx-40 mx-6 relative">


        {/* Navbar */}
        <div className="flex justify-between py-8">
          <Image
            src="/logo.png"
            alt="Description of the image"
            width={150}
            height={100}
          />
          <div onClick={() => { setBurgerOpen(true) }} className="p-2 hover:bg-gray-200 rounded-xl cursor-pointer">
            <RxHamburgerMenu className="lg:hidden text-3xl "></RxHamburgerMenu>
          </div>
          <div className="hidden lg:flex justify-right text-xl gap-16">
            <div className="cursor-pointer" onClick={() => { scrollToSection("contactMe") }}>Contact Me</div>
            <div className="cursor-pointer" onClick={() => { scrollToSection("whatIDo") }} >What I do</div>
            <div className="cursor-pointer" onClick={() => { scrollToSection("myProjects") }} >My Projects</div>
          </div>
        </div>

        {burgerOpen && (
          <div onClick={() => { setBurgerOpen(false) }} className="fixed inset-0 bg-black bg-opacity-70 z-50">
            <div onClick={(e) => e.stopPropagation()} className="absolute right-0 bg-white h-full w-[40%]">
              <div className="flex flex-col gap-4 p-4">
                <div className="cursor-pointer" onClick={() => { scrollToSection("contactMe") }} >Contact Me</div>
                <div className="cursor-pointer" onClick={() => { scrollToSection("whatIDo") }} >What I do</div>
                <div className="cursor-pointer" onClick={() => { scrollToSection("myProjects") }} >My Projects</div>
              </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div className="flex justify-center w-full min-h-[calc(100vh-64px)]">
          <div className="flex xl:flex-row flex-col items-center mt-8 xl:gap-48 max-w-screen-lg">
            <div className="flex flex-col gap-4 flex-1 items-center xl:items-start xl:m-0 mt-16 mx-16">
              <h3 className="text-xl xl:text-left text-center">Hi, My name is Agil Zulfa</h3>
              <h1 className="xl:text-8xl text-7xl font-bold xl:text-left text-center">Full Stack Developer</h1>
              <h3 className="text-xl xl:text-left text-center">
                focus in harnessing the power of Next.js with Express.js
                and REST API to craft dynamic web applications.
                creating seamless user experiences that bring ideas to life.
              </h3>
              <button className="rounded-lg p-4 border-black border-2 shadow-[4px_4px_0px_0px_black] hover:shadow-[3px_3px_0px_0px_black] transition-all w-[150px] text-sm font-semibold bg-[#F5CC44]">Learn About me</button>
            </div>
            <div className="flex flex-1 min-w-96 xl:p-0">
              <Image
                src="/client.png"
                alt="Description of the image"
                className=""
                layout="responsive"
                width={500}
                height={100}
              />
            </div>
          </div>
        </div>

        {/* Get in touch */}
        <div className="flex flex-col items-center min-h-screen justify-center" id="contactMe">
          <div className="xl:w-[50%] flex flex-col items-center gap-8">
            <h1 className="text-5xl xl:text-7xl font-bold w-[80%] text-center">Get in touch with me</h1>
            <h3 className="text-center">
              I am a passionate Front-end developer currently in my third year of studying
              Informatics/Computer Science at Siliwangi University. Feel free to explore my
              portfolio to see the diverse projects I&apos;ve completed. If you&apos;re interested in my work
              and would like me to bring your project to life, don&apos;t hesitate to reach out to me!
            </h3>

            <button className="rounded-lg p-4 border-black border-2 shadow-[4px_4px_0px_0px_black] hover:shadow-[3px_3px_0px_0px_black] transition-all w-[150px] text-sm font-semibold bg-[#FF6B6B]">Contact me</button>
          </div>
          <img src="/react.svg" className="absolute right-0 translate-x-[400px] translate-y-40 w-200 h-100" />
        </div>

        {/* What I do */}
        <div className="flex flex-col items-center gap-1 min-h-screen justify-center" id="whatIDo">
          <h1 className="text-5xl font-bold">What I do</h1>
          <h3 className="text-xl font-thin">as a fullstack</h3>
          <div className="flex xl:flex-row flex-col items-center w-full xl:gap-8 justify-center">
            <div className="mt-16 xl:w-[33%] md:w-[50%] w-[70%] rounded-lg border-2 border-black border xl:h-64 h-48 shadow-[4px_4px_0px_0px_black] flex flex-col items-center justify-center">
              <h2 className="font-bold">Font-end developement</h2>
              <h2>Build Interactive UI with NextJS</h2>
            </div>
            <div className="mt-16 xl:w-[33%] md:w-[50%] w-[70%] rounded-lg border-2 border-black border xl:h-64 h-48 shadow-[4px_4px_0px_0px_black] flex flex-col items-center justify-center">
              <h2 className="font-bold">REST API</h2>
            </div>
            <div className="mt-16 xl:w-[33%] md:w-[50%] w-[70%] rounded-lg border-2 border-black border xl:h-64 h-48 shadow-[4px_4px_0px_0px_black] flex flex-col items-center justify-center">
              <h2 className="font-bold">Back end developement</h2>
              <h3 className="text-center">Dynamic app with ExpressJS and SQL</h3>
            </div>
          </div>
          <img src="/js.svg" className="absolute right-0 translate-x-[250px] translate-y-[400px] w-200 h-100" />
        </div>

        {/* My projects */}
        <div className="flex flex-col items-center min-h-screen justify-center gap-1 md:pt-0 pt-64" id="myProjects">
          <h1 className="font-bold text-5xl">My projects</h1>
          <h3 className="text-xl font-thin text-center">Some Projects that i’ve done with a year experiences</h3>
          <div className="mt-16 grid xl:grid-cols-3 md:grid-cols-2 md:px-0 px-8 gap-6 w-full">
            <div className="shadow-[4px_4px_0px_0px_black] rounded-lg w-full row-span-3 border-black border-2 flex flex-col gap-4 items-center justify-center p-5">
              <h1 className="font-bold">Lorem Ipsum</h1>
              <p className="font-thin">lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame </p>
            </div>
            <div className="shadow-[4px_4px_0px_0px_black] rounded-lg w-full row-span-4 border-black border-2 flex flex-col gap-4 items-center justify-center p-5">
              <h1 className="font-bold">Lorem Ipsum</h1>
              <p className="font-thin">lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame </p>
            </div>
            <div className="shadow-[4px_4px_0px_0px_black] rounded-lg w-full row-span-3 border-black border-2 flex flex-col gap-4 items-center justify-center p-5">
              <h1 className="font-bold">Lorem Ipsum</h1>
              <p className="font-thin">lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame </p>
            </div>
            <div className="shadow-[4px_4px_0px_0px_black] rounded-lg w-full row-span-3 border-black border-2 flex flex-col gap-4 items-center justify-center p-5">
              <h1 className="font-bold">Lorem Ipsum</h1>
              <p className="font-thin">lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame </p>
            </div>
            <div className="shadow-[4px_4px_0px_0px_black] rounded-lg w-full row-span-3 border-black border-2 flex flex-col gap-4 items-center justify-center p-5">
              <h1 className="font-bold">Lorem Ipsum</h1>
              <p className="font-thin">lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame </p>
            </div>
            <div className="shadow-[4px_4px_0px_0px_black] rounded-lg w-full row-span-2 border-black border-2 flex flex-col gap-4 items-center justify-center p-5">
              <h1 className="font-bold">Lorem Ipsum</h1>
              <p className="font-thin">lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame </p>
            </div>
          </div>
          <img src="/nextjs.svg" className="absolute left-0 translate-x-[-250px] translate-y-[450px] h-[300px]" />
        </div>

        {/* Client reviews */}

        <div className="flex flex-col justify-center items-center pt-64 pb-16 gap-1">
          <h1 className="font-bold text-5xl">Client Review</h1>
          <h3 className="font-thin text-xl">Some client word</h3>
        </div>

      </div>

      <div className="flex flex-col p-4 pb-64 gap-4">
        <SliderLeft></SliderLeft>
        <SliderRight></SliderRight>
      </div>

      <div className="flex justify-between items-center xl:px-8 px-4 pb-4 md:text-base text-xs">
        <div className="flex flex-col">
          <h3>All rights reserved</h3>
          <h3>C Afil Zulfa</h3>
        </div>
        <div className="flex xl:gap-16 gap-4">
          <a className="cursor-pointer">Github</a>
          <a className="cursor-pointer">Whatsapp</a>
          <a className="cursor-pointer">Instagram</a>
        </div>
      </div>

    </div>
  );
}
