import DisclaimerModal from "./disclaimer";
import SplashAbout from "./splashAbout";

import SplashHistory from "./splashHistory";
import SplashIntro from "./splashIntro";
import SplashPurchase from "./splashPurchase";
import StickyNav from "./stickyNav";

export default function Home() {
  return (
    <main className="flex flex-col w-full mx-auto">
      <DisclaimerModal />
      <SplashIntro />
      <SplashAbout />
      <StickyNav />
      <SplashHistory />
      <SplashPurchase />
    </main>
  );
}
