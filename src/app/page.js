import Image from "next/image"
import About from "@/components/about"
import Project from "@/components/project"
import Experience from "@/components/experience"
import SkillAndTools from "@/components/skill&Tools"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="w-full">
      <div className="h-auto w-[90%] m-auto lg:h-[500px] mt-16 ">
        <div className="w-full lg:w-[50%] h-auto">
          <h1 className="text-[20px] lg:text-[33px] text-[#464660]">
            Hi There, I’m David Paul Sitompul
            <br></br>
            <b className="text-[#368B85]"> Front-end web developer</b>
          </h1>
        </div>
        <div className=" w-full h-[350px] lg:absolute lg:right-0 lg:top-0 lg:w-[40%] lg:h-[500px]">
          <div className="w-full h-full relative">
            <Image src="/img/paul.png" fill alt="foto" />
          </div>
        </div>
        <div className="w-full lg:w-[50%] mt-20 h-auto ">
          <div className="text-[14px] lg:text-[20px] flex-col space-y-5]">
            <p className="indent-3"> Bachelor of Computer Science, University of North Sumatra. Still learning about programming</p>
            <p className="indent-3 mt-2 italic">{`"There are no failed dreams only delayed dreams. If you feel like youve failed to achieve your dream dont worry another dream can be created"`}</p>
          </div>
          <a href="/cv/David Paul Sitompul-resume.pdf" download={true}>
            <button className="bg-[#368B85] px-5 py-2 mt-6 lg:mt-12 rounded-lg shadow-md text-white font-semibold">Download My CV</button>
          </a>
        </div>
      </div>

      <About />
      <Experience />
      <Project />
      <SkillAndTools />
      <Contact />
    </main>
  )
}
