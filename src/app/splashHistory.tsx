import Image from "next/image";
import Link from "next/link";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const SplashHistory: React.FC = () => {
  return (
    <section id="history" className="main-container">
      <div className="pt-16 pb-24">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="w-full md:w-1/3"></div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl text-primary mb-5">
              Positioning Aggies as Leaders in the Wine Industry
            </h2>
            <p className="text-lg">
              At UC Davis, students can earn a Master of Science degree,
              Bachelor of Science degree, or a minor in viticulture and enology.
              These degrees equip students with the scientific foundation of
              winemaking, combined with hands-on experiential learning in the
              vineyard and winery. PhD and postdoctoral scholars can further
              perform research in the laboratories of our multidisciplinary V&E
              faculty.
            </p>
            <br />
            <p className="text-lg">
              The career opportunities for V&E graduates are limitless, with
              many going on to be winemakers, vineyard managers, professors,
              consultants, researchers, industry leaders, and more. The V&E
              Department’s cutting-edge facilities, research-driven curriculum,
              and deep industry ties shape students into thinkers,
              problem-solvers, and leaders whose careers will help transform the
              wine industry locally and globally.
            </p>
            <div className="mt-8">
              <Link
                href="https://wineserver.ucdavis.edu/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center space-x-2 text-white rounded-sm hover:bg-primary-light active:bg-primary-dark font-bold bg-primary py-2 px-4"
              >
                <span>More on UC Davis V&amp;E</span>
                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex mt-12">
          <div className="w-full">
            <Image
              src={"./oakville_station.jpg"}
              width={1604}
              height={840}
              alt={
                "Rows of grapevines in a vineyard stretching into the distance, with autumn-colored leaves and a mountainous landscape in the background under a clear sky. "
              }
            />
          </div>
        </div>
        <p className="text-sm mt-1 opacity-75">
          Rows of grapevines in a vineyard stretching into the distance, with
          autumn-colored leaves and a mountainous landscape in the background
          under a clear sky. (Gregory&nbsp;Urquiaga&nbsp;/&nbsp;UC&nbsp;Davis)
        </p>
      </div>
    </section>
  );
};

export default SplashHistory;
