const SplashIntro: React.FC = () => {
  return (
    <div className="intro-wrapper h-[100vh]">
      <div className="container">
        <div className="lg:w-1/3 h-[85vh] flex flex-col justify-between bg-hildgard splash-red">
          <div className="mt-auto p-12 text-white">
            <p className="text-md italic">Introducing</p>
            <h1 className="text-2xl font-bold mb-4">Hilgard631</h1>
            <p className="text-base leading-relaxed">
              Crafted just beyond the campus gates, Hilgard631 offers
              small-batch wines born from a passion for fermentation, flavor,
              and thoughtful process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashIntro;
