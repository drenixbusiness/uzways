import Image from "next/image";
import Header from "../components/Header/Header";
import HomePage from "../components/HomePage/HomePage";
import InfiniteBanner from "../components/Banner/InfiniteBanner";
import Origin from "../components/Origin/Origin";
import Services from "../components/Services/Services";

export default function Home() {
  return (
    <div className="bg-near-black">
      <Header />
      <HomePage />
      <InfiniteBanner />
      <Origin />
      <hr className="mt-20 border-gray-800 w-full" />
      <Services />
    </div>
  );
}
