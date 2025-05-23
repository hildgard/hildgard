const SplashContact: React.FC = () => {
  return (
    <div className="main-container">
      <div
        id="contact"
        className="relative w-full"
        style={{ paddingTop: "175%" }}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSd-CUmTm1iWO1wFhce7wIi1-RGxYp2dtnp99kzdYaPTc3sFIg/viewform?embedded=true"
          className="absolute top-0 left-0 w-full h-full border-0"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          allowFullScreen
          title="Contact Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default SplashContact;
