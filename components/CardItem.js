import Image from "next/image";

export default function CardItem({ Name, Price, Img }) {
  return (
    <div className="hover:scale-110">
      <div className="text-center justify-center flex mt-[-70px]">
        <Image src={Img} width={200} height={150} />
      </div>
      <div className="my-10 text-center">
        <h3 className="font-bold">{Name}</h3>
        <h3 className="font-bold">{Price}</h3>
      </div>
    </div>
  );
}
