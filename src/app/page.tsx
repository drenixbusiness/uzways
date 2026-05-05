import Image from "next/image";
import Header from "../components/Header/Header";
import HomePage from "../components/HomePage/HomePage";

export default function Home() {
  return (
    <div className="bg-primary">
      <Header />
      <HomePage />
    </div>
  );
}
