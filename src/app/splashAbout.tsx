import Image from "next/image";
import Link from "next/link";

const SplashAbout: React.FC = () => {
  return (
    <section id="about" className="bg-primary text-white">
      <div className="main-container">
        <div className="pt-16 pb-24">
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="w-full md:w-1/3 flex flex-col text-left">
              <div>
                {/* <p className="text-md italic text-sm">Origins of</p> */}
                <h1 className="text-2xl">Origins of Hilgard631</h1>
              </div>
              <div className="mt-auto pt-4">
                <Link
                  className="mt-2 font-bold border active:bg-[#521322] hover:bg-[#821D36] border-white py-1 px-5"
                  href=""
                >
                  More on UC Davis V&E
                </Link>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p>
                The name Hilgard631 pays tribute to Dr. Eugene Hilgard, a
                pioneering soil scientist, viticulturist, and the first director
                of the University Agricultural Experiment Station (AES), which
                has, and continues to, lay the groundwork for successful
                agriculture in California. The number 631 is the address of the
                UC Davis LEED Platinum Teaching and Research Winery on Hilgard
                Lane—the world’s first winery to receive this distinction in
                sustainability. In selecting a name, we aimed to not only honor
                our department’s strong ties to history and agriculture, but
                also our unwavering commitment to scholarship, innovation, and
                sustainability.
              </p>
              <br />
              <p>
                <b>The Grapes and Wines</b>
              </p>
              <p>
                Wines are made in the UC Davis LEED Platinum Teaching and
                Research Winery from grapes grown by us. They come from Oakville
                Station, our premier Napa Valley vineyard used for generations
                to produce both world-class research and wines, and our
                vineyards that surround the UC Davis campus. Each year students
                with the support of V&E staff and faculty make a variety of
                wines as part of the classes taught to undergraduate and
                graduate students. Every bottle is handcrafted by Aggies—a
                tribute to the passion and excellence that defines the
                University of California.
              </p>
            </div>
          </div>

          {/* IMAGE 1 */}
          <div className="flex mb-5 mt-12">
            <div className="w-full">
              <Image src={"./about_1.jpg"} width={1600} height={818} alt={""} />
            </div>
          </div>

          {/* IMAGE 2 + 3 */}
          <div className="flex flex-col gap-5 md:flex-row">
            <div className="w-full md:w-1/3">
              <Image src={"./about_2.jpg"} width={528} height={776} alt={""} />
            </div>
            <div className="w-full md:w-2/3">
              <Image src={"./about_3.jpg"} width={1076} height={776} alt={""} />
            </div>
          </div>

          <p className="text-sm opacity-75">Photo Caption here:</p>
        </div>
      </div>
    </section>
  );
};

export default SplashAbout;
