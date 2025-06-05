import Image from "next/image";
import NavItems from "./components/navItems";

const SplashIntro: React.FC = () => {
  return (
    <section id="intro" className="relative h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="./grapesonvine.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://ucdcdn.azureedge.net/public/media/olivesequence.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 h-screen flex">
        <div className="w-full md:w-2/3 xl:w-1/3 flex flex-col justify-between bg-primary splash-red text-white p-4 md:p-12 md:m-16">
          <div>
            <Image
              width={72}
              height={73}
              alt="Pencil image of a grape leaf"
              src="/grapeleaf.svg"
            />
          </div>

          <p className="text-xl italic mt-auto">From Vine to Vision</p>
          <Image
            src="/hilgard631-light.svg"
            width={300}
            height={67}
            className="mb-4"
            alt="Hilgard631 Logo"
          />
          <p className="text-base">
            With over 145 years of global leadership in grape and wine
            education, the UC Davis Department of Viticulture and Enology (V&E)
            enters a new era with the launch of Hilgard631. This 501(c)(3)
            nonprofit makes it possible for us to share our wine with the
            general public for the benefit of student scholarship. Hilgard631
            supports our mission of uniting a diverse community of faculty,
            staff, and students via the knowledge and learning required to
            produce exceptional wine.
          </p>
          <br />
          <NavItems />
        </div>
      </div>
    </section>
  );
};

export default SplashIntro;
