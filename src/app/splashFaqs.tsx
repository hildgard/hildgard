import Accordion from "./components/Accordion";
import { HilgardFaqs } from "./lib/faqs";

export default function SplashFAQ() {
  return (
    <section id="faq" className="main-container">
      <div className="flex flex-row">
        <div className="w-full">
          <h2 className="pt-24 pb-4 text-2xl text-primary">
            Frequently Asked Questions
          </h2>

          {HilgardFaqs.map((faq) => {
            return (
              <Accordion key={faq.id} title={faq.question}>
                <div className="border-primary border-l-2 w-full md:w-[65%] px-4 text-md space-y-2">
                  <div dangerouslySetInnerHTML={{ __html: faq.answer }} />

                  {faq.sources?.length > 0 && (
                    <>
                      <h4 className="uppercase text-xs text-secondary-f pt-2">
                        Links
                      </h4>
                      <ul>
                        {faq.sources.map((source, index) => (
                          <li key={index}>
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary text-sm"
                            >
                              {source.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </Accordion>
            );
          })}
        </div>
      </div>
    </section>
  );
}
