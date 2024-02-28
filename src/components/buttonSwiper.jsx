import React from "react"
import { useSwiper } from "swiper/react"
import * as Gr from "react-icons/gr"

const ButtonSwiper = () => {
  const swiper = useSwiper()

  return (
    <div className="buttonSwiper mt-10 flex justify-center p-2 space-x-5">
      <button onClick={() => swiper.slidePrev()}>
        <Gr.GrFormPrevious className="border rounded-full" size={30} />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <Gr.GrFormNext className="bg-[#5CB85F] rounded-full" size={30} />
      </button>
    </div>
  )
}

export default ButtonSwiper
