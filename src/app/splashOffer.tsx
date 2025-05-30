import Image from "next/image";

const SplashOffer: React.FC = () => {
  return (
    <section id="offer" className="main-container">
      <hr className="text-primary" />
      <h2 className="pt-24 pb-8 text-2xl text-primary">Selections</h2>

      <div className="flex flex-col md:flex-ro pb-4 mb-16 gap-5">
        <div className="w-full md:w-1/2">
          <p className="uppercase text-xl pb-1">Cabernet Sauvignon</p>
          <p>2020</p>
          <p>Oakville Station</p>
          <br />

          <p className="uppercase text-xl pb-1">Cabernet Sauvignon</p>
          <p>2022</p>
          <p>Oakville Station</p>
          <br />

          <p className="uppercase text-xl pb-1">Sauvignon Blanc</p>
          <p>2024</p>
          <p>Oakville Station</p>
          <br />
        </div>
        <div className="w-full md:w-1/2">
          <Image src={"./ph6.jpg"} width={898} height={900} alt={""} />
        </div>
      </div>
    </section>
  );
};

export default SplashOffer;
