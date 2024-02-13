"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NavBarMenu } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";

SwiperCore.use([Navigation]);

export const SwiperHome = () => {
  return (
    <div className="flex justify-center items-center w-[80%] m-auto ">
      <Swiper
        spaceBetween={50}
        loop={true}
        className="relative"
        slidesPerView={5}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {NavBarMenu.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-[320px] flex justify-center items-center "
          >
            <Link href={item.url}>
              <div className="flex justify-center items-center flex-col mt-2">
                <div className="rounded-full z-0 w-[90px] h-[90px] bg-[#e1b787] flex items-center justify-center transition-transform duration-300 transform hover:scale-110">
                  <Image
                    alt={item.title}
                    src={item.image}
                    className=" z-10 hover:w-[70px]  hover:h-[70px]"
                    width={80}
                    height={80}
                  />
                </div>

                <p className="text-center mt-2 font-medium">{item.title}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}

        <button className="swiper-button-prev absolute left-[-20px]  after:text-black"></button>
        <button className="swiper-button-next absolute right-[20px] after:text-black"></button>
      </Swiper>
    </div>
  );
};
