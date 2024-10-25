"use client";
import SectionTitle from "../Common/SectionTitle";
import { Carousel, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Solutions = () => {
  const images = [
    "https://th.bing.com/th/id/R.7cb154c23e8d0d1a8aee715f841462d7?rik=qxar8HS8J%2fDRjw&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/R.8932b66db42f6a7808f50ee11b5d47bf?rik=Hk8al53z6SzkHg&pid=ImgRaw&r=0",
  ];
  
  return (
    <>
      <section
        id="services"
        className="bg-primaryColor/[.03] border-b border-textColor/[.15] py-16 dark:border-white/[.15] md:py-20 lg:py-28"
      >
        <div className="container flex flex-col items-center justify-center">
          <SectionTitle
            title="Our Solutions"
            paragraph="We offer specialized solutions that can help your business digitalize and grow. Contact us for more information."
            center
          />

          <Carousel
            className="h-[500px] w-[98vw]  max-w-[1000px] rounded-xl md:w-9/12"
            autoplay={true}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="bg-primaryColor hover:bg-primaryColor !absolute top-2/4 left-4 -translate-y-2/4 rounded-full"
              >
                <MdOutlineKeyboardArrowLeft size={45} />
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="bg-primaryColor hover:bg-primaryColor !absolute top-2/4 !right-4 -translate-y-2/4 rounded-full"
              >
                <MdOutlineKeyboardArrowRight size={45} />
              </IconButton>
            )}
            loop={true}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i
                        ? "bg-primaryColor w-8"
                        : "w-4 bg-gray-400"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            {images.map((item, index) => {
              return (
                <div className="relative h-full w-full rounded-xl bg-cover bg-center ">
                  <Image
                    src={item}
                    key={index}
                    alt="Carousel Item"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Solutions;
