"use client";

import Image from "next/image";

const wines = [
  {
    name: "Arvoré",
    type: "Cabernet Sauvignon",
    year: 2023,
    price: 40.0,
    location: "Oakville AVA, Napa Valley",
    image: "./productshots/student_PH.jpg",
  },
  {
    name: "Ambrosia",
    type: "Cabernet Sauvignon",
    year: 2021,
    price: 40.0,
    location: "Oakville AVA, Napa Valley",
    image: "./productshots/student_PH.jpg",
  },
  {
    name: "Kosmo",
    type: "Petit Syrah",
    year: 2023,
    price: 40.0,
    location: "Yolo County",
    image: "./productshots/student_PH.jpg",
  },
  {
    name: "Arvoré",
    type: "Sauvignon Blanc",
    year: 2023,
    price: 30.0,
    location: "Yolo County",
    image: "./productshots/student_PH.jpg",
  },
  {
    name: "Ambrosia",
    type: "Chardonnay",
    year: 2023,
    price: 30.0,
    location: "Yolo County",
    image: "./productshots/student_PH.jpg",
  },
  {
    name: "Kosmo",
    type: "Albariño",
    year: 2023,
    price: 30.0,
    location: "Yolo County",
    image: "./productshots/student_PH.jpg",
  },
  {
    name: "Arvoré",
    type: "Cabernet Sauvignon",
    year: 2023,
    price: 40.0,
    location: "Oakville AVA, Napa Valley",
    image: "./productshots/student_PH.jpg",
  },
  {
    name: "Ambrosia",
    type: "Cabernet Sauvignon",
    year: 2021,
    price: 40.0,
    location: "Oakville AVA, Napa Valley",
    image: "./productshots/student_PH.jpg",
  },
  {
    name: "Kosmo",
    type: "Petit Syrah",
    year: 2023,
    price: 40.0,
    location: "Yolo County",
    image: "./productshots/student_PH.jpg",
  },
  {
    name: "Arvoré",
    type: "Sauvignon Blanc",
    year: 2023,
    price: 30.0,
    location: "Yolo County",
    image: "./productshots/student_PH.jpg",
  },
  {
    name: "Ambrosia",
    type: "Chardonnay",
    year: 2023,
    price: 30.0,
    location: "Yolo County",
    image: "./productshots/student_PH.jpg",
  },
  {
    name: "Kosmo",
    type: "Albariño",
    year: 2023,
    price: 30.0,
    location: "Yolo County",
    image: "./productshots/student_PH.jpg",
  },
];

export default function WineGrid() {
  return (
    <div className="main-container">
      <h2 className="text-2xl text-primary text-center mb-6">
        Available Student Wines
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {wines.map((wine, index) => (
          <div
            key={`${wine.name}-${wine.type}-${index}`}
            className="w-full flex flex-col pb-2 border-b-2 hover:border-primary border-transparent transition duration-200"
          >
            <Image
              src={wine.image}
              alt={wine.name}
              width={400}
              height={240}
              className="h-60 object-cover mb-2 w-full"
            />
            <div className="flex justify-between mt-1">
              <p className="text-secondary-f text-sm">{wine.location}</p>
              <p className="text-secondary-f text-sm">{wine.year}</p>
            </div>
            <h4 className="text-lg text-primary mt-3">{wine.name}</h4>
            <div className="flex justify-between">
              <h3 className="text-primary">{wine.type}</h3>
              <p>${wine.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
