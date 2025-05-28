import SplashAbout from "./splashAbout";

import SplashHistory from "./splashHistory";
import SplashIntro from "./splashIntro";
import SplashPurchase from "./splashPurchase";

export default function Home() {
  return (
    <main className="flex flex-col w-full mx-auto">
      <SplashIntro />
      <SplashAbout />
      <SplashHistory />
      <SplashPurchase />
    </main>
  );
}
