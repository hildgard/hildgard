import Image from "next/image";

const SplashPurchase: React.FC = () => {
  return (
    <div className="main-container">
      <div className="pt-16 pb-16">
        <div className="flex gap-5">
          <div className="w-6/8 flex">
            <div id="purchase">
              <h1 className="text-3xl text-hilgard">
                Purchasing Info - Local Pickup Only
              </h1>
              <p className="py-8 text-lg">
                We keep things small-batch and intentionally limited. All of our
                wines are available exclusively for local pickup at [insert
                location name here]—no shipping, no deliveries.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="w-1/2">
            <div className="pb-16">
              <address
                className="not-italic text-lg border-l-4 border-hilgard ps-4"
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
          </div>
          <div className="w-1/2">
            <a
              className="text-hilgard underline"
              href="https://maps.google.com/?q=631+Hilgard+Rd+Davis+CA+95616"
              target="_blank"
              rel="noopener noreferrer"
            >
              Map cutout link thing here
            </a>
          </div>
        </div>
        <div className="flex pt-16 pb-4 mb-16 gap-5">
          <div className="w-1/2">
            <h3 className="text-hilgard text-xl pb-4">Offerings</h3>
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
          <div className="w-1/2">
            <Image src={"./ph6.jpg"} width={898} height={900} alt={""} />
          </div>
        </div>
        <hr className="text-hilgard" />
      </div>
    </div>
  );
};

export default SplashPurchase;
