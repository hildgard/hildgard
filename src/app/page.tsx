import DisclaimerModal from "./components/disclaimer";
import SplashAbout from "./splashAbout";

import SplashHistory from "./splashHistory";
import SplashIntro from "./splashIntro";
import SplashOffer from "./splashOffer";
import SplashPurchase from "./splashPurchase";
import StickyNav from "./components/stickyNav";
import SplashFAQ from "./splashFaqs";
import SplashStudent from "./splashStudent";

export default function Home() {
  return (
    <main className="flex flex-col w-full mx-auto">
      <DisclaimerModal />
      <SplashIntro />
      <SplashAbout />
      <StickyNav />
      <SplashHistory />
      <div className="gradient-bg">
        <SplashOffer />
      </div>
      <div className="bg-bg">
        <SplashStudent />
        <SplashPurchase />
        <SplashFAQ />
      </div>
    </main>
  );
}
