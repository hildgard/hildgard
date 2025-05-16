const SplashIntro: React.FC = () => {
  return (
    <div className="intro-wrapper h-[100vh]">
      <div className="container">
        <div className="lg:w-1/2 h-[80vh] flex flex-col justify-between bg-hildgard bg-opacity-88">
          <div className="mt-auto">
            <h1 className="text-2xl font-bold mb-4">Hildgard631</h1>
            <p className="text-base leading-relaxed">
              Crafted just beyond the campus gates, Hildegard631 offers
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
