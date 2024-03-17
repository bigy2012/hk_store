import Image from "next/image";

export default function ChooseUs() {
  return (
    <div className="lg:flex lg:justify-between sm:block">
      <div className="lg:w-50 sm:w-full">
        <h1 className="text-4xl font-bold">Why Choose Us</h1>
        <div className="w-[70%]">
          <h1 className="text-sm my-5 w-50">
            Tempor excepteur Lorem adipisicing dolor in mollit est.Cupidatat
            aliqua enim veniam pariatur consequat ad.
          </h1>
        </div>

        <div className="lg:flex lg:justify-between mt-12">
          <div className="lg:w-[50%]">
            <span class="material-symbols-outlined">local_shipping</span>
            <h3 className="font-bold">Fast & Free Shipping</h3>
            <div className="w-[80%] mt-3">
              <h3 className="text-sm">
                Dolore ut non exercitation do quis consectetur non dolor.
                Cupidatat labore laborum occaecat pariatur amet labore quis
                nostrud dolor laborum eu culpa.
              </h3>
            </div>
          </div>
          <div className="lg:w-[50%]">
            <span class="material-symbols-outlined">shopping_bag</span>
            <h3 className="font-bold">Easy to Shop</h3>
            <div className="w-[80%] mt-3">
              <h3 className="text-sm">
                Dolore ut non exercitation do quis consectetur non dolor.
                Cupidatat labore laborum occaecat pariatur amet labore quis
                nostrud dolor laborum eu culpa.
              </h3>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:justify-between mt-12">
          <div className="lg:w-[50%]">
            <span class="material-symbols-outlined">support</span>
            <h3 className="font-bold">24/7 Support</h3>
            <div className="w-[80%] mt-3">
              <h3 className="text-sm">
                Dolore ut non exercitation do quis consectetur non dolor.
                Cupidatat labore laborum occaecat pariatur amet labore quis
                nostrud dolor laborum eu culpa.
              </h3>
            </div>
          </div>
          <div className="lg:w-[50%] mt-12">
            <span class="material-symbols-outlined">cached</span>
            <h3 className="font-bold">Hassle Free Refund</h3>
            <div className="w-[80%] mt-3">
              <h3 className="text-sm">
                Dolore ut non exercitation do quis consectetur non dolor.
                Cupidatat labore laborum occaecat pariatur amet labore quis
                nostrud dolor laborum eu culpa.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-50 sm:w-full flex justify-center mt-12">
        <Image src="/sofa/room.png" width={500} height={500} className="rounded-2xl" />
      </div>
    </div>
  );
}
