import Image from "next/image";

const SplashOffer: React.FC = () => {
  return (
    <section id="offer" className="main-container">
      <h2 className="pt-24 pb-4 text-2xl text-primary text-center">
        What we Grow
      </h2>
      <p className="text-center w-[100%] md:w-[60%] mx-auto pb-8 text-secondary-f">
        We offer a rotation selection W 12 student made wines and two ever
        present UC Davis Wines, you can find all of them below
      </p>

      <div className="flex flex-col md:flex-row pt-8 mt-8 pb-8 mb-16 gap-16 border-t-1 border-primary border-b-1">
        <div className="w-full md:w-1/2">
          <Image src={"./ph6.jpg"} width={898} height={900} alt={""} />
          <div className="flex justify-between mt-3">
            <p className="text-secondary-f">Oakville Napa Valley</p>
            <p className="text-secondary-f">2020</p>
          </div>
          <h3 className="text-primary text-xl mt-2">
            UC Davis Sauvignon Blanc
          </h3>
          <p>$24.999</p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src={"./ph6.jpg"} width={898} height={900} alt={""} />
          <div className="flex justify-between mt-3">
            <p className="text-secondary-f">Oakville Napa Valley</p>
            <p className="text-secondary-f">2020</p>
          </div>
          <h3 className="text-primary text-xl mt-2">
            UC Davis Sauvignon Blanc
          </h3>
          <p>$24.999</p>
        </div>
      </div>
    </section>
  );
};

export default SplashOffer;
