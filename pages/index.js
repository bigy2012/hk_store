import Banner from "@/components/Banner";
import ExProduct from "@/components/ExProduct";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <div className="py-52 px-52">
        <ExProduct/>
      </div>
    </div>
  );
}
