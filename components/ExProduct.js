import Link from "next/link";
import CardExProduct from "./CardExProduct";
import CardItem from "./CardItem";

export default function ExProduct() {
  return (
    <div className="lg:flex lg:justify-between sm:block">
      <div className="lg:w-[25%] sm:w-full sm:mb-36 mr-5">
        <h1 className="text-3xl font-bold">Crafted with excellent material.</h1>
        <h1 className="text-md font-medium text-gray-500 my-5">
          Adipisicing tempor mollit dolor nostrud commodo sunt. Cupidatat ex
          laborum incididunt adipisicing anim ad est consequat consequat eu
          officia nisi cillum nostrud.
        </h1>
        <button
          type="button"
          className="py-3 px-10 hover:opacity-[80%] bg-black text-white font-medium rounded-full"
        >
          Explore
        </button>
      </div>
      <div className="lg:w-[25%] sm:w-full sm:mb-36 lg:mx-5">
        <Link href="/Product/1">
          <CardExProduct
            Name="Arm Share Item One"
            Price="$50.00"
            Img="/share/share1.png"
          />
        </Link>
      </div>
      <div className="lg:w-[25%] sm:w-full sm:mb-36 mx-5">
        <Link href="/Product/2">
          <CardItem
            Name="Arm Share Item Two"
            Price="$75.00"
            Img="/share/share2.png"
          />
        </Link>
      </div>
      <div className="lg:w-[25%] sm:w-full sm:mb-36">
        <Link href="/Product/3">
          <CardItem
            Name="Arm Share Item Three"
            Price="$90.00"
            Img="/share/share3.png"
          />
        </Link>
      </div>
    </div>
  );
}
