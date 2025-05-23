import SplashAbout from "./splashAbout";
import SplashContact from "./splashContact";
import SplashHistory from "./splashHistory";
import SplashIntro from "./splashIntro";
import SplashPurchase from "./splashPurchase";

export default function Home() {
  return (
    <main className="flex flex-col w-full mx-auto">
      <SplashIntro />
      <SplashAbout />
      <SplashPurchase />
      <SplashHistory />
      <SplashContact />
    </main>
  );
}
