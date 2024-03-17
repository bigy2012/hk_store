import Image from "next/image";

export default function CardExProduct({ Name, Price, Img }) {
  return (
    <div className="bg-gray-300 p-3 rounded-2xl hover:scale-110">
      <div className="text-center justify-center flex mt-[-90px]">
        <Image src={Img} width={200} height={150} />
      </div>
      <div className="my-10 text-center">
        <h3 className="font-bold">{Name}</h3>
        <h3 className="font-bold">{Price}</h3>
      </div>
      <div className="text-center justify-center flex mb-[-35px]">
        <span className="material-symbols-outlined">add_circle</span>
      </div>
    </div>
  );
}
