import DisclaimerModal from "./components/disclaimer";
import SplashAbout from "./splashAbout";

import SplashHistory from "./splashHistory";
import SplashIntro from "./splashIntro";
import SplashOffer from "./splashOffer";
import SplashPurchase from "./splashPurchase";
import StickyNav from "./components/stickyNav";
import SplashFAQ from "./splashFaqs";

export default function Home() {
  return (
    <main className="flex flex-col w-full mx-auto">
      <DisclaimerModal />
      <SplashIntro />
      <SplashAbout />
      <StickyNav />
      <SplashHistory />
      <SplashOffer />
      <SplashPurchase />
      <SplashFAQ />
    </main>
  );
}
