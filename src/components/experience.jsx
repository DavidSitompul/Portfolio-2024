"use client"
import React from "react"
import { Accordion } from "flowbite-react"
import Image from "next/image"

const Experience = () => {
  const dataExperience = [
    {
      questionExperience: "Education Level",
      photoExperience: [
        {
          foto: "/certificate/wisuda.JPG",
          ket: "Bachelor of Computer Science",
        },
      ],
    },
    {
      questionExperience: "Organization Certificate",
      photoExperience: [
        {
          foto: "/certificate/Pema.jpg",
          ket: "Pema ( 2021-2022 )",
        },
        {
          foto: "/certificate/Salinan David Paul Sitompul-04.png",
          ket: "Committee ( 2021 )",
        },
        {
          foto: "/certificate/David Paul Sitompul.png",
          ket: "Participant",
        },
      ],
    },
    {
      questionExperience: "Internship Certificate",
      photoExperience: [
        {
          foto: "/certificate/Hasil_191401086_1.jpg",
          ket: "Internship 2022",
        },
      ],
    },
  ]

  return (
    <>
      <div className="flex mt-20 space-y-10 mx-auto flex-col lg:flex-row lg:mx-32 lg:justify-between lg:space-y-0">
        <div className="w-full text-center h-auto space-y-3 lg:mx-0 lg:w-[20%] lg:text-left">
          <h1 className="font-bold text-2xl">Experience &</h1>
          <p className="text-sm font-light">Certificate</p>
        </div>
        <Accordion collapseAll flush={true} className="space-y-4 border-none w-full  lg:w-[80%]">
          {dataExperience.map((data, i) => {
            return (
              <Accordion.Panel key={i}>
                <div className="border-none p-1">
                  <Accordion.Title className="border p-2 px-4 bg-[#D4D4D4] bg-opacity-5 text-sm rounded-sm">{data.questionExperience}</Accordion.Title>
                </div>
                <Accordion.Content className="border-none">
                  <div className=" lg:grid lg:grid-cols-2 lg:gap-10">
                    {data.photoExperience.map((proof, index) => {
                      return (
                        <div key={index} className="w-full flex items-center space-x-3">
                          <div className="relative h-[200px] w-[75%] lg:w-[300px] mb-5 lg:mb-0 space-x-5">
                            <Image src={proof.foto} className="border rounded-xl p-2 text-sm relative" fill alt="..."></Image>
                          </div>
                          <h1 className="w-[25%] lg:w-[35%] font-bold"> {proof.ket} </h1>
                        </div>
                      )
                    })}
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            )
          })}
        </Accordion>
      </div>
    </>
  )
}

export default Experience
