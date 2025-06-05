import Image from "next/image";

const SplashHistory: React.FC = () => {
  return (
    <section id="history" className="main-container">
      <div className="pt-16 pb-24">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="w-full md:w-1/3">
            <div>
              <h2 className="text-2xl text-primary">
                Positioning Aggies as Leaders in the Wine Industry
              </h2>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p>
              Starting with the basics: viticulture is the study of how grapes
              are grown, with a focus on creating the best conditions for
              healthy, high-quality fruit. Enology is the science (and art) of
              transforming those grapes into wine through fermentation,
              blending, and aging.
            </p>
            <br />
            <p>
              At UC Davis, students can earn a Master of Science degree,
              Bachelor of Science degree, or a minor in viticulture and enology.
              These degrees equip students with the scientific foundation of
              winemaking, combined with hands-on experiential learning in the
              vineyard and winery. PhD and postdoctoral scholars can further
              perform research in the laboratories of our multidisciplinary V&E
              faculty. These scholars are central to faculty research success,
              our faculty having published more scholarly articles in
              viticulture, enology, and wine than any other institution; their
              nearly 6,000 publications have been cited more than 240,000 times
              worldwide.
            </p>
            <br />
            <p>
              The career opportunities for V&E graduates are limitless, with
              many going on to be winemakers, vineyard managers, professors,
              consultants, researchers, industry leaders, and more. The V&E
              Department’s cutting-edge facilities, research-driven curriculum,
              and deep industry ties shape students into thinkers,
              problem-solvers, and leaders whose careers will help transform the
              wine industry locally and globally.{" "}
            </p>
          </div>
        </div>
        <div className="flex mt-12">
          <div className="w-full">
            <Image src={"./ph7.jpg"} width={1604} height={752} alt={""} />
          </div>
        </div>
        <p className="text-sm opacity-75">Photo Caption here:</p>
        <div className="flex flex-col gap-5 md:flex-row mt-8">
          <div className="w-full md:w-1/3">
            <div>
              <h2 className="text-2xl text-primary">
                Blending Knowledge and Experience
              </h2>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p>
              The spirit of Hilgard631 is most evident in the VEN 127L:
              Post-Fermentation Wine Processing course. Each spring, Aggies
              spend ten weeks collaborating in small groups to produce
              student-made wine; they learn to blend, adjust, fine, age,
              stabilize, filter, design the labels, and bottle and package
              wines. This course bridges theory and practice, giving students
              the chance to apply what they have learned in previous UC Davis
              courses to real-world winemaking, under the guidance of industry
              consultants. Following several successful vintages, the launch of
              Hilgard631 marks a significant milestone for the department and
              for our students, giving V&E graduates one more achievement to
              celebrate as they embark on their professional wine journeys.
            </p>
          </div>
        </div>
      </div>
      <hr className="text-primary" />
    </section>
  );
};

export default SplashHistory;
