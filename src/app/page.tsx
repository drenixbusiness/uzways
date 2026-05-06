import Image from "next/image";
import Header from "../components/Header/Header";
import HomePage from "../components/HomePage/HomePage";
import InfiniteBanner from "../components/Banner/InfiniteBanner";
import Origin from "../components/Origin/Origin";

export default function Home() {
  return (
    <div className="bg-primary">
      <Header />
      <HomePage />
      <InfiniteBanner />
      <Origin />
    </div>
  );
}
