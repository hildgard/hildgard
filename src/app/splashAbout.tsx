import Image from "next/image";
import Link from "next/link";

const SplashAbout: React.FC = () => {
  return (
    <div className="bg-hilgard text-white">
      <div className="main-container">
        <div className="pt-16 pb-24">
          <div className="flex gap-5">
            <div className="w-1/3 flex flex-col text-left">
              <div id="about">
                <p className="text-md italic text-sm">
                  Leaders in the Wine Industry
                </p>
                <h1 className="text-2xl">About Hilgard</h1>
              </div>

              <Link
                className="mt-auto font-bold underline underline-offset-2 decoration-white decoration-[1px]"
                href=""
              >
                Learn more about UC Davis V&E
              </Link>
            </div>
            <div className="w-2/3">
              <p>
                The name Hilgard631 pays tribute to Eugene Hilgard, the
                pioneering agricultural professor who established the University
                Agricultural Experiment Station, and to 631, the address of the
                UC Davis LEED Platinum Teaching and Research Winery—the world’s
                first winery to receive this distinction in sustainability. In
                choosing the name, our goal was that label embodied ____.
              </p>
              <br />
              <p>
                Proceeds from the wine sales are reinvested into covering the
                costs of supplies, materials, equipment and labor necessary for
                wine production. Any remaining funds will be reinvested in
                students through an annual scholarship fund. A few of the
                motivating factors of launching Hilgard631 was to generate
                revenue to support more experiential learning opportunities, to
                help students afford the opportunity to take part in
                international harvests, and to ease some of the financial
                pressure that comes with being a full-time student.
              </p>
            </div>
          </div>
          <div className="flex mb-5 mt-12">
            <div className="w-full">
              <Image src={"./ph1.jpg"} width={1600} height={818} alt={""} />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-1/3">
              <Image src={"./ph2.jpg"} width={528} height={776} alt={""} />
            </div>
            <div className="w-2/3">
              <Image src={"./ph3.jpg"} width={1076} height={776} alt={""} />
            </div>
          </div>
          <p className="text-sm opacity-75">Photo Caption here:</p>
        </div>
      </div>
    </div>
  );
};

export default SplashAbout;
