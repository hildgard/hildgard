import Image from "next/image";

const SplashOffer: React.FC = () => {
  return (
    <section id="offer" className="main-container">
      <h2 className="pt-24 pb-4 text-2xl text-primary text-center">
        What we Offer
      </h2>
      <p className="text-center w-[100%] md:w-[60%] mx-auto pb-8 text-secondary-f">
        We carry a unique selection of 12 student made wines and two UC Davis
        V&E label options.
      </p>

      <div className="flex flex-col md:flex-row pt-8 mt-8 pb-8 mb-16 gap-16 border-primary border-b-1">
        <div className="w-full md:w-1/2">
          <Image
            src={"./productshots/vesb.jpg"}
            width={815}
            height={815}
            alt={""}
          />
          <div className="flex justify-between mt-3">
            <p className="text-secondary-f">Oakville AVA, Napa Valley</p>
            <p className="text-secondary-f">2024</p>
          </div>
          <h3 className="text-primary text-xl mt-2">Sauvignon Blanc</h3>
          <p>$&nbsp;50.00</p>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={"./productshots/vecs.jpg"}
            width={815}
            height={815}
            alt={""}
          />
          <div className="flex justify-between mt-3">
            <p className="text-secondary-f">Oakville AVA, Napa Valley</p>
            <p className="text-secondary-f">2020</p>
          </div>
          <h3 className="text-primary text-xl mt-2">Cabernet Sauvignon</h3>
          <p>$125.00</p>
        </div>
      </div>
    </section>
  );
};

export default SplashOffer;
