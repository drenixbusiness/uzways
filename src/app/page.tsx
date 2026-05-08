import HomePage from "../components/HomePage/HomePage";
import InfiniteBanner from "../components/Banner/InfiniteBanner";
import Origin from "../components/Origin/Origin";
import Services from "../components/Services/Services";
import ForDrivers from "../components/ForDrivers/ForDrivers";
import Fleet from "../components/Fleet/Fleet";
import UzWays from "../components/AboutComp/UzWays";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className="bg-near-black w-full max-w-[1900px] mx-auto overflow-x-hidden">
      <HomePage />
      <InfiniteBanner />
      <Origin />
      <hr className="mt-20 border-gray-800 w-full" />
      <Services />
      <ForDrivers />
      <Fleet />
      <UzWays />
      <Contact />
      <Footer />
    </div>
  );
}