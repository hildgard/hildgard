import Image from "next/image";
import NavItems from "./navItems";

const SplashIntro: React.FC = () => {
  return (
    <section id="intro" className="intro-wrapper h-screen">
      <div className="container">
        <div className="w-full sm:w-2/3 lg:w-4/10 h-[100vh] md:h-[85vh] flex flex-col justify-between bg-primary splash-red">
          <div className="p-6 md:p-12">
            <Image
              width={72}
              height={73}
              alt={"Pencil image of a grape leaf"}
              src="./grapeleaf.svg"
            />
          </div>

          <div className="p-6 md:p-12 text-white">
            <p className="text-xl italic">Introducing</p>
            <Image
              src="./hilgard631-light.svg"
              width={300}
              height={67}
              className="mb-4"
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
            <NavItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplashIntro;
