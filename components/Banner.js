import Image from "next/image";

export default function Banner() {
  return (
    <div className="sm:px-10 md:px-10 lg:px-52 text-white bg-teal-900 sm:pt-10 lg:pt-32 lg:pb-48 lg:flex lg:justify-between md:block md:justify-center">
      <div className="sm:w-[100%] lg:w-[50%] sm:mb-10">
        <h1 className="text-7xl font-medium">Modern Interior</h1>
        <h1 className="text-7xl mt-3 font-medium">Design Studio</h1>
        <h1 className="text-md mt-3 overflow-hidden ">
          <span className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </span>
        </h1>
        <div className="mt-5 sm:w-100 sm:flex sm:justify-center lg:justify-start">
          <button
            type="button"
            className="py-3 px-8 bg-yellow-400 text-black font-medium rounded-full hover:bg-yellow-300"
          >
            Shop now
          </button>
          <button
            type="button"
            className="py-3 px-8 border border-white text-white font-medium rounded-full mx-3 hover:opacity-[80%]"
          >
            Explore
          </button>
        </div>
      </div>
      <div className="sm:w-full lg:w-[50%] sm:flex sm:justify-center">
        <Image
          src="/sofa1.png"
          alt="Home"
          width={500}
          height={500}
          className="hover:scale-110 hover:opacity-80 lg:mt-[-80px]"
        />
      </div>
    </div>
  );
}
