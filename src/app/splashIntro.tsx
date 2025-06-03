import Image from "next/image";
import NavItems from "./components/navItems";

const SplashIntro: React.FC = () => {
  return (
    <section id="intro" className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://ucdcdn.azureedge.net/public/media/olivesequence.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 h-screen flex">
        <div className="w-full sm:w-2/3 lg:w-4/10 flex flex-col justify-between bg-primary splash-red text-white p-12 md:mt-16 md:ms-16 md:mb-16">
          <div>
            <Image
              width={72}
              height={73}
              alt="Pencil image of a grape leaf"
              src="/grapeleaf.svg"
            />
          </div>

          <p className="text-xl italic mt-auto">Introducing</p>
          <Image
            src="/hilgard631-light.svg"
            width={300}
            height={67}
            className="mb-4"
            alt="Hilgard631 Logo"
          />
          <p className="text-base">
            For over 145 years, the UC Davis Department of Viticulture and
            Enology (V&E) has united a diverse community of faculty, staff, and
            students under a shared goal of producing exceptional wine. In
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
    </section>
  );
};

export default SplashIntro;
