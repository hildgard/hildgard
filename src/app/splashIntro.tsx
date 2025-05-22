import Image from "next/image";
import Link from "next/link";

const SplashIntro: React.FC = () => {
  return (
    <div className="intro-wrapper h-[100vh]">
      <div className="container">
        <div className="w-full md:w-1/2 xl:w-1/3 h-[85vh] flex flex-col justify-between bg-hilgard splash-red">
          <div className="mt-auto p-12 text-white">
            <p className="text-md italic">Introducing</p>
            <Image
              src="./hilgard631-light.svg"
              width={300}
              height={67}
              alt={"Hilgard631 Logo"}
            />

            <p className="text-base leading-relaxed">
              For over 145 years, the UC Davis Department of Viticulture and
              Enology (V&E) has united a diverse community of faculty, staff,
              and students under a shared goal of producing exceptional wine. In
              support of this vision, Hilgard631 501(c)(3) is the nonprofit
              organization leading the charge of selling our wine to the public
              with wine grapes from the UC Davis campus vineyards, ToKalon (Napa
              Valley’s most renowned vineyard), and the UC Davis Oakville
              Experimental Station.
            </p>
            <br />
            <nav>
              <Link
                className="font-bold underline underline-offset-2 decoration-white decoration-[1px] "
                href="/#about"
              >
                About
              </Link>
              <Link
                className="font-bold underline underline-offset-2 decoration-white decoration-[1px] mx-4"
                href="/#purchase"
              >
                Purchasing
              </Link>
              <Link
                className="font-bold underline underline-offset-2 decoration-white decoration-[1px] "
                href=""
              >
                History
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashIntro;
