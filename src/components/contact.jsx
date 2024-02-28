"use client"
import React from "react"
import Link from "next/link"
import * as Fa from "react-icons/fa"
import * as Ai from "react-icons/ai"
const Contact = () => {
  const datacontact = [
    {
      label: "Email",
      icon: <Ai.AiOutlineMail size={30} />,
      link: "mailto:davidpaulsitompul@gmail.com",
      to: "davidpaulsitompul@gmail.com",
    },
    {
      label: "Github",
      icon: <Fa.FaGithub size={30} />,
      link: "https://github.com/DavidSitompul",
      to: "Davidsitompul",
    },
    {
      label: "Linkedin",
      icon: <Fa.FaLinkedin size={30} />,
      link: "https://www.linkedin.com/in/david-paul-sitompul-09b172273",
      to: "David Paul Sitompul",
    },
    {
      label: "Jobstreet",
      icon: <Fa.FaNetworkWired size={30} />,
      link: "https://www.jobstreet.co.id/id/profile/david-sitompul-nFBHvMlwg8",
      to: "David Paul Sitompul",
    },
    {
      label: "WhatsApp",
      icon: <Fa.FaWhatsapp size={30} />,
      to: "0895-4150-07631",
    },
    {
      label: "Location",
      icon: <Fa.FaLocationArrow size={30} />,
      to: "Tarutung, Tapanuli Utara, Sumatera Utara, Indonesia",
    },
    {
      label: "Instagram",
      icon: <Fa.FaInstagram size={30} />,
      link: "https://www.instagram.com/davidsitompul__/",
      to: "Davidsitompul__",
    },
  ]
  return (
    <>
      <section className="mt-10">
        <div className="lg:flex  px-6 py-12 mx-auto">
          <div className="lg:w-[30%]">
            <p className="font-semibold text-green-500 dark:text-green-400 text-3xl"> {`Let's Connect !!!`} </p>

            <h1 className="mt-2 text-sm text-gray-800 md:text-lg dark:text-white">you can contact me with this</h1>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:w-[70%] mt-10 lg:mt-0">
            {datacontact.map((info, i) => {
              return (
                <div key={i} className="flex space-x-5 items-center text-green-500 font-normal">
                  <span>{info.icon}</span>
                  <div>
                    <h2 className="text-black">{info.label}</h2>
                    <a href={info.link}>{info.to}</a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
