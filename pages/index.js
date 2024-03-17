import Banner from "@/components/Banner";
import ChooseUs from "@/components/ChooseUs";
import ExProduct from "@/components/ExProduct";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <div className="lg:py-52 lg:px-52 sm:px-20 sm:py-20">
        <ExProduct/>
        <ChooseUs/>
      </div>
    </div>
  );
}
