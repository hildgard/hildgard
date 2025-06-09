import MapEmbed from "./components/mapEmbed";

const SplashPurchase: React.FC = () => {
  return (
    <section id="purchase" className="main-container">
      <h2 className="pt-24 pb-8 text-3xl text-primary">
        Purchasing Info - Local Pickup Only
      </h2>

      <div className="flex flex-col gap-5">
        <div className="w-full md:w-3/4 pb-8">
          <p className="pb-8 text-xl">
            All our wines are available exclusively for local pickup at the
            address below. No shipping, no deliveries.
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
        <MapEmbed />
      </div>
    </section>
  );
};

export default SplashPurchase;
