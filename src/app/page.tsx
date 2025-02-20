"use client"

import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import {SliderLeft, SliderRight} from "../components/custom/Slider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"], // Add the weights you need
});

const cards = [
  { id: 1, text: "Card 1" },
  { id: 2, text: "Card 2" },
  { id: 3, text: "Card 3" },
  { id: 4, text: "Card 4" },
];

export default function Home() {

  return (
    <div className={`bg-[#F9F5F2] min-h-screen ${poppins.className} text-black`}>
      <div className="mx-80">


        {/* Navbar */}
        <div className="flex justify-between py-8">
          <Image
            src="/logo.png"
            alt="Description of the image"
            width={150}
            height={100}
          />
          <div className="flex justify-right gap-16 text-xl">
            <Link href="#">About</Link>
            <Link href="#">What I do</Link>
            <Link href="#">My Project</Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl">Hi, My name is Agil Zulfa</h3>
            <h1 className="text-8xl font-bold w-[500px]">Full Stack Developer</h1>
            <h3 className="text-xl w-[550px]">
              focus in harnessing the power of Next.js with Express.js
              and REST API to craft dynamic web applications.
              creating seamless user experiences that bring ideas to life.
            </h3>
            <button className="rounded-lg p-4 border-black border-2 shadow-[4px_4px_0px_0px_black] hover:shadow-[3px_3px_0px_0px_black] transition-all w-[150px] text-sm font-semibold bg-[#F5CC44]">Learn About me</button>
          </div>
          <Image
            src="/client.png"
            alt="Description of the image"
            width={500}
            height={100}
          />
        </div>

        {/* Get in touch */}
        <div className="flex flex-col items-center py-64">
          <div className="w-[50%] flex flex-col items-center gap-8">
            <h1 className="text-7xl font-bold w-[80%] text-center">Get in touch with me</h1>
            <h3 className="text-center">I am a passionate Front-end developer currently in my third year of studying
              Informatics/Computer Science at Siliwangi University. Feel free to explore my
              portfolio to see the diverse projects I've completed. If you're interested in my work
              and would like me to bring your project to life, don't hesitate to reach out to me!</h3>
            <button className="rounded-lg p-4 border-black border-2 shadow-[4px_4px_0px_0px_black] hover:shadow-[3px_3px_0px_0px_black] transition-all w-[150px] text-sm font-semibold bg-[#FF6B6B]">Contact me</button>
          </div>
        </div>

        {/* What I do */}
        <div className="flex flex-col items-center pb-64 gap-1">
          <h1 className="text-5xl font-bold">What I do</h1>
          <h3 className="text-xl font-thin">as a fullstack</h3>
          <div className="flex w-full gap-8 justify-center">
            <div className="mt-16 w-[30%] rounded-lg border-2 border-black border h-64 shadow-[4px_4px_0px_0px_black] flex flex-col items-center justify-center">
              <h2 className="font-bold">Font-end developement</h2>
              <h2>Build Interactive UI with NextJS</h2>
            </div>
            <div className="mt-16 w-[30%] rounded-lg border-2 border-black border h-64 shadow-[4px_4px_0px_0px_black] flex flex-col items-center justify-center">
              <h2 className="font-bold">REST API</h2>
            </div>
            <div className="mt-16 w-[30%] rounded-lg border-2 border-black border h-64 shadow-[4px_4px_0px_0px_black] flex flex-col items-center justify-center">
              <h2 className="font-bold">Back end developement</h2>
              <h3>Dynamic app with ExpressJS and SQL</h3>
            </div>
          </div>
        </div>

        {/* My projects */}
        <div className="flex flex-col items-center pb-64 gap-1">
          <h1 className="font-bold text-5xl">My projects</h1>
          <h3 className="text-xl font-thin">Some Projects that i’ve done with a year experiences</h3>
          <div className="mt-16 grid grid-cols-3 border-2 gap-6 w-full h-[550px]">
            <div className="shadow-[4px_4px_0px_0px_black] rounded-lg w-full row-span-3 border-black border-2 flex flex-col gap-4 items-center justify-center p-5">
              <h1 className='font-bold'>Lorem Ipsum</h1>
              <p className="font-thin">lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame </p>
            </div>
            <div className="shadow-[4px_4px_0px_0px_black] rounded-lg w-full row-span-4 border-black border-2 flex flex-col gap-4 items-center justify-center p-5">
              <h1 className='font-bold'>Lorem Ipsum</h1>
              <p className="font-thin">lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame </p>
            </div>
            <div className="shadow-[4px_4px_0px_0px_black] rounded-lg w-full row-span-3 border-black border-2 flex flex-col gap-4 items-center justify-center p-5">
              <h1 className='font-bold'>Lorem Ipsum</h1>
              <p className="font-thin">lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame </p>
            </div>
            <div className="shadow-[4px_4px_0px_0px_black] rounded-lg w-full row-span-3 border-black border-2 flex flex-col gap-4 items-center justify-center p-5">
              <h1 className='font-bold'>Lorem Ipsum</h1>
              <p className="font-thin">lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame </p>
            </div>
            <div className="shadow-[4px_4px_0px_0px_black] rounded-lg w-full row-span-3 border-black border-2 flex flex-col gap-4 items-center justify-center p-5">
              <h1 className='font-bold'>Lorem Ipsum</h1>
              <p className="font-thin">lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame </p>
            </div>
            <div className="shadow-[4px_4px_0px_0px_black] rounded-lg w-full row-span-2 border-black border-2 flex flex-col gap-4 items-center justify-center p-5">
              <h1 className='font-bold'>Lorem Ipsum</h1>
              <p className="font-thin">lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame </p>
            </div>
          </div>
        </div>

        {/* Client reviews */}

        <div className="flex flex-col items-center pb-16 gap-1">
          <h1 className="font-bold text-5xl">Client Review</h1>
          <h3 className="font-thin text-xl">Some client word</h3>
        </div>

      </div>

      <div className="flex flex-col p-4 pb-64 gap-4">
        <SliderLeft></SliderLeft>
        <SliderRight></SliderRight>
      </div>

      <div className="flex justify-between items-center px-8 pb-4">
        <div className="flex flex-col">
          <h3>All rights reserved</h3>
          <h3>C Afil Zulfa</h3>
        </div>
        <div className="flex gap-16">
          <a className="cursor-pointer">Github</a>
          <a className="cursor-pointer">Whatsapp</a>
          <a className="cursor-pointer">Instagram</a>
        </div>
      </div>

    </div>
  );
}
