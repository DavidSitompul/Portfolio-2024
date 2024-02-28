"use client"
import React from "react"
import { Card, Button, Carousel } from "flowbite-react"
import { info } from "autoprefixer"

const Project = () => {
  const imgs = [
    {
      images: "/img/marketPlace.png",
      link: "https://marketplaceulos.vercel.app",
      judul: "Final Project",
      ket: "marketplace platform for ulos products and is expected to develop as a shopping platform for other local products.",
    },
    {
      images: "/img/GMI.png",
      link: "https://gmianugerah.vercel.app/",
      judul: "CHURCH Profile",
      ket: "an application that makes it easier for congregations or other people to get information about the church",
    },
    {
      images: "/img/landingPage.png",
      link: "https://github.com/DavidSitompul/LandingpageRental",
      judul: "Rentals Car",
      ket: "landing page application for car rental",
    },
  ]

  return (
    <div className="h-auto w-[90%] mx-auto mt-16 mb-20">
      <h1 className="mx-auto w-auto font-bold mb-5 text-2xl text-center"> My Project </h1>
      <Carousel
        slide={false}
        indicators={false}
        theme={{
          control: {
            base: "inline-flex h-8 w-8 mt-5 items-center justify-center rounded-full bg-green-500 group-hover:bg-green-400 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-green-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
          },
          root: {
            base: "relative h-full w-full ",
            leftControl: "absolute bot-0 left-0 ml-[30%] lg:ml-[40%] h-full items-center  px-4 focus:outline-none",
            rightControl: "absolute bot-0 right-0 mr-[30%] lg:mr-[40%] h-full items-center  px-4 focus:outline-none",
          },
        }}
      >
        {imgs.map((img, i) => {
          return (
            <>
              <Card
                key={i}
                theme={{
                  root: {
                    base: "flex rounded-lg border border-gray-200 bg-green-800 shadow-md dark:border-gray-700",
                    children: "flex h-full flex-col justify-center gap-4 p-6",
                    horizontal: {
                      off: "flex-col",
                      on: "flex-col md:flex-row ",
                    },
                  },
                  img: {
                    horizontal: {
                      off: "rounded-t-lg",
                      on: "h-auto w-full lg:w-[40%] object-cover md:h-auto rounded-2xl",
                    },
                  },
                }}
                horizontal
                imgSrc={img.images}
                imgAlt="tesggl"
                className=" w-full h-[400px] lg:h-auto p-1"
              >
                <div className="text-white">
                  <h5 className="text-2xl font-bold tracking-tight ">{img.judul}</h5>
                  <p className="font-normal">{img.ket}</p>
                  <Button className="mt-5 w-40" href={img.link}>
                    Read More
                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Button>
                </div>
              </Card>
            </>
          )
        })}
      </Carousel>
    </div>
  )
}

export default Project
