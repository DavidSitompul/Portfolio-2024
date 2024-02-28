import React from "react"
import Image from "next/image"

const About = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row mx-10 lg:mt-10 mb-10">
      <div className="mt-10 w-full lg:w-[40%] lg:mt-0 h-auto">
        <div className="w-full lg:h-[450px] h-[340px] relative">
          <Image src="/img/about_me.jpg" fill alt="foto" className="rounded-2xl" />
        </div>
      </div>
      <div className="w-full lg:w-[60%] h-auto mt-10 lg:mt-[70px]">
        <h1 className="font-bold text-xl ml-5">About Me</h1>
        <p className="text-sm lg:text-[15px] tracking-wider indent-7 text-justify lg:mx-10 mt-6">
          I am a fresh graduate from the University of North Sumatra with a keen interest in web development. During my time at university, I was actively involved in various activities and organizations, and I also participated in the
          Kampus Merdeka program, specifically MSIB. As a Frontend Developer at PT. Pundi Mas Berjaya from August 2022 to December 2022, I was responsible for designing UI layouts using skills such as HTML, CSS, JavaScript, React JS,
          NextJs, Node JS, Git & GitHub, Tailwind CSS, Figma, and Component UI. This experience has strengthened my interest and skills in web programming. Currently, I am seeking job opportunities that will allow me to further develop my
          career.
        </p>
      </div>
    </div>
  )
}

export default About
