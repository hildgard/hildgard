import Image from "next/image";
import MapEmbed from "./mapEmbed";

const SplashPurchase: React.FC = () => {
  return (
    <section id="purchase" className="main-container">
      <hr className="text-primary" />
      <h1 className="pt-24 pb-8 text-3xl text-primary">
        Purchasing Info - Local Pickup Only
      </h1>

      <div className="flex flex-col gap-5 md:flex-row">
        <div className="w-full md:w-1/2">
          <p className="pb-8 text-lg">
            We keep things small-batch and intentionally limited. All of our
            wines are available exclusively for local pickup at the address
            below. No shipping, no deliveries.
          </p>
          <address
            className="not-italic text-lg border-l-4 border-primary ps-4"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <span itemProp="name">Robert Mondavi Institute</span>
            <br />
            <span itemProp="streetAddress">631 Hilgard Rd</span>
            <br />
            <span itemProp="addressLocality">Davis</span>,{" "}
            <span itemProp="addressRegion">CA</span>{" "}
            <span itemProp="postalCode">95616</span>
            <br />
            <br />
            <span>9:00am to 5:00pm</span> <br />
            <span>Monday Through Friday</span>
          </address>
        </div>
        <div className="w-full md:w-1/2">
          <MapEmbed />
        </div>
      </div>
      <div className="flex pt-24 pb-4 mb-16 gap-5">
        <div className="w-full md:w-1/2">
          <h3 className="text-primary text-xl pb-4">Offerings</h3>
          <p className="uppercase text-xl pb-1">Cabernet Sauvignon</p>
          <p>2020</p>
          <p>Oakville Station</p>
          <br />

          <p className="uppercase text-xl pb-1">Cabernet Sauvignon</p>
          <p>2022</p>
          <p>Oakville Station</p>
          <br />

          <p className="uppercase text-xl pb-1">Sauvignon Blanc</p>
          <p>2024</p>
          <p>Oakville Station</p>
          <br />
        </div>
        <div className="w-full md:w-1/2">
          <Image src={"./ph6.jpg"} width={898} height={900} alt={""} />
        </div>
      </div>
    </section>
  );
};

export default SplashPurchase;
