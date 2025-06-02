"use client";

const wines = [
  {
    name: "Arvoré",
    type: "Cabernet Sauvignon",
    year: 2023,
    price: 40.0,
    location: "Oakville AVA, Napa Valley",
    image: "./student_wine_ph.png",
  },
  {
    name: "Ambrosia",
    type: "Cabernet Sauvignon",
    year: 2021,
    price: 40.0,
    location: "Oakville AVA, Napa Valley",
    image: "./student_wine_ph.png",
  },
  {
    name: "Kosmo",
    type: "Petit Syrah",
    year: 2023,
    price: 40.0,
    location: "Yolo County",
    image: "./student_wine_ph.png",
  },
  {
    name: "Arvoré",
    type: "Sauvignon Blanc",
    year: 2023,
    price: 30.0,
    location: "Yolo County",
    image: "./student_wine_ph.png",
  },
  {
    name: "Ambrosia",
    type: "Chardonnay",
    year: 2023,
    price: 30.0,
    location: "Yolo County",
    image: "./student_wine_ph.png",
  },
  {
    name: "Kosmo",
    type: "Albariño",
    year: 2023,
    price: 30.0,
    location: "Yolo County",
    image: "./student_wine_ph.png",
  },
];

export default function WineGrid() {
  return (
    <div className="main-container">
      <h2 className="text-2xl text-primary text-center mb-6">
        Available Student Wines
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {wines.map((wine, index) => (
          <div
            key={`${wine.name}-${wine.type}-${index}`}
            className="w-full flex flex-col pb-2 border-b-2 hover:border-primary border-transparent transition duration-200"
          >
            <img
              src={wine.image}
              alt={wine.name}
              className="h-60 object-cover mb-2"
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
