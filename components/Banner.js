import Image from "next/image";

export default function Banner(){
    return(
        <div className="sm:px-10 lg:px-52 text-white bg-teal-900 pt-32 pb-48 flex justify-between">
        <div className="w-[50%]">
          <h1 className="text-7xl font-medium">Modern Interior</h1>
          <h1 className="text-7xl mt-3 font-medium">Design Studio</h1>
          <h1 className="text-md mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </h1>
          <div className="mt-5">
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
        <div className="text">
          <Image src="/sofa1.png" alt="Home" width={500} height={500} />
        </div>
      </div>
    )
}