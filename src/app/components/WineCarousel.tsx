"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const wines = [
  {
    name: "Seven",
    type: "Cabernet Sauvignon",
    year: 2020,
    price: 19.0,
    image: "./student_wine_ph.png",
    description:
      "Synthesis is a bold, fictional Cabernet Sauvignon that entices with rich aromas...",
  },
  {
    name: "Zero",
    type: "Chardonnay",
    year: 2022,
    price: 19.0,
    image: "./student_wine_ph.png",
    description: "Chardonnay version...",
  },
  {
    name: "One",
    type: "Cabernet Sauvignon",
    year: 2020,
    price: 19.0,
    image: "./student_wine_ph.png",
    description:
      "Synthesis is a bold, fictional Cabernet Sauvignon that entices with rich aromas...",
  },
  {
    name: "Two",
    type: "Chardonnay",
    year: 2022,
    price: 19.0,
    image: "./student_wine_ph.png",
    description: "Chardonnay version...",
  },
  {
    name: "Three",
    type: "Cabernet Sauvignon",
    year: 2020,
    price: 19.0,
    image: "./student_wine_ph.png",
    description:
      "Synthesis is a bold, fictional Cabernet Sauvignon that entices with rich aromas...",
  },
  {
    name: "Four",
    type: "Chardonnay",
    year: 2022,
    price: 19.0,
    image: "./student_wine_ph.png",
    description: "Chardonnay version...",
  },
  {
    name: "Five",
    type: "Cabernet Sauvignon",
    year: 2020,
    price: 19.0,
    image: "./student_wine_ph.png",
    description:
      "Synthesis is a bold, fictional Cabernet Sauvignon that entices with rich aromas...",
  },
  {
    name: "Six",
    type: "Chardonnay",
    year: 2022,
    price: 19.0,
    image: "./student_wine_ph.png",
    description: "Chardonnay version...",
  },
];

export default function WineCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mx-auto max-w-5xl">
      <h2 className="text-2xl text-primary text-center mb-6">
        Available Student Wines
      </h2>

      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {wines.map((wine, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <img
                src={wine.image}
                alt={wine.name}
                className="h-60 object-cover mb-2"
              />
              <div className="text-center">
                <p className="font-semibold">{wine.name}</p>
                <p className="text-sm uppercase text-gray-500">{wine.type}</p>
                <p>${wine.price.toFixed(2)}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6 px-4 text-center text-gray-700 text-base min-h-[4rem]">
        {wines[activeIndex]?.description}
      </div>
    </div>
  );
}
