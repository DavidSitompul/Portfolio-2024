"use client"
import React from "react"
import Marquee from "react-fast-marquee"

const SkillAndTools = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center w-[100%] mb-10 mt-20 lg:pt-16 items-center">Skills & Tools</h1>
      <Marquee autoFill pauseOnClick>
        <div align="left" className="flex gap-x-5">
          <img align="left" className="ml-5" alt="HTML 5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
          <img align="left" alt="CSS 3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
          <img align="left" alt="GitHub" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
          <img align="left" alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
          <img align="left" alt="Tailwind" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
          <img align="left" alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
          <img align="left" alt="NodeJS" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
          <img align="left" alt="NextJs" src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" />
          <img align="left" alt="Netlifly" src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" />
          <img align="left" alt="Vercel" src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
        </div>
      </Marquee>
      <Marquee autoFill pauseOnClick direction="rigth" className="mt-5">
        <div align="left" className="flex gap-x-5">
          <img className="ml-5" align="left" alt="Dribbble" src="https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white" />
          <img align="left" alt="Adobe XD" src="https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6" />
          <img align="left" alt="Figma" src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" />
          <img align="left" alt="Dribbble" src="https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white" />
          <img align="left" alt="Git" src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" />
          <img align="left" alt="Boostrap" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" />
          <img align="left" alt="VsCode" src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" />
          <img align="left" alt="Windows" src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white" />
        </div>
      </Marquee>
    </>
  )
}

export default SkillAndTools
