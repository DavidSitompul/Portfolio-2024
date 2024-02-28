import Image from "next/image"
import About from "@/components/about"
import Project from "@/components/project"
import Experience from "@/components/experience"
import SkillAndTools from "@/components/skill&Tools"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="lg:ml-10">
      <div className="header lg:flex w-full h-full">
        <div className="profil m-5 p-5 w-90%]">
          <h1 className="text-[20px] lg:text-[33px] text-[#464660]">
            Hi There, I’m David Paul Sitompul
            <br></br>
            <b className="text-[#368B85]"> Front-end web developer</b>
          </h1>
          <div className=" lg:mt-9 text-[14px] lg:text-[20px] flex-col space-y-5 mt-[115%]">
            <p className="indent-3"> Bachelor of Computer Science, University of North Sumatra. Still learning about programming</p>
            <p className="indent-3 mt-2 italic"> "There are no failed dreams only delayed dreams. If you feel like youve failed to achieve your dream dont worry another dream can be created"</p>
          </div>
          <a href="/cv/Transkip Nilai_terbaru.pdf" download={true}>
            <button className="bg-[#368B85] px-5 py-2 mt-6 lg:mt-12 rounded-lg shadow-md text-white font-semibold">Download My CV</button>
          </a>
        </div>

        <div className="foto w-full h-[300px] lg:w-[70%] lg:h-[600px] lg:ml-30 -mt-[175%]  lg:-mt-24">
          <div className="w-full h-full relative">
            <Image src="/img/paul.png" fill alt="foto" />
          </div>
        </div>
      </div>
      <div className="mt-[90%] lg:mt-16">
        <About />
      </div>
      <Experience />
      <Project />
      <SkillAndTools />
      <Contact />
    </main>
  )
}
