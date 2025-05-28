import Image from "next/image";

const SplashHistory: React.FC = () => {
  return (
    <section id="history" className="main-container">
      <div className="pt-8 pb-24">
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="w-full md:w-1/3">
            <div>
              <h1 className="text-2xl text-hilgard">
                Positioning Aggies as Leaders in the Wine Industry
              </h1>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <p>
              Both the UC Davis V&E undergraduate and graduate degrees equip
              students with the scientific foundation of winemaking, combined
              with hands-on experiential learning in the vineyards and the
              winery. Our facilities, curriculum, experiential learning
              opportunities, research, industry connections, student
              organizations and close-knit community mold students into
              thinkers, problem solvers, and leaders whose careers will help
              transform the wine industry locally and globally.
            </p>
            <br />
            <p>
              Central to the department’s success is its multidisciplinary
              faculty, which include award-winning chemists, chemical engineers,
              microbiologists, a sensory scientist, and plant biologists, all
              working collaboratively with students to tackle industry
              challenges like pests and disease, vineyard management, and
              extreme weather. Aside from teaching, V&E faculty are global
              leaders in research, having published the most scholarly articles
              in viticulture, enology, and wine than any other university, with
              nearly 6,000 publications having been cited more than 240,000
              times worldwide.
            </p>
          </div>
        </div>
        <div className="flex mt-12">
          <div className="w-full">
            <Image src={"./ph7.jpg"} width={1604} height={752} alt={""} />
          </div>
        </div>
        <p className="text-sm opacity-75">Photo Caption here:</p>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="w-full md:w-1/3 flex"></div>
          <div className="w-full md:w-2/3">
            <p>
              The department’s commitment to nurturing the next generation of
              wine industry experts is most evident in the VEN 127L:
              Post-Fermentation Wine Processing course. Each spring, Aggies
              spend ten weeks collaborating in small groups to produce
              student-made wine; they learn to blend, adjust, fine, age,
              stabilize, filter, bottle and package wines. Along the way, they
              enhance their time-management, communication, teamwork and
              critical thinking skills.
            </p>
            <br />
            <p>
              This course bridges theory and practice, giving students the
              chance to apply what they have learned in previous UC Davis
              courses to real-world winemaking, with guidance and feedback from
              industry consultants. Following several successful vintages, the
              launch of Hilgard631 marks a significant milestone—giving V&E
              graduates another achievement to take pride in as they embark on
              their professional journeys.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplashHistory;
