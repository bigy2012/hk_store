import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container-md sm:px-10 md:px-10 lg:px-52 py-3  bg-teal-900">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link
            className="text-2xl font-bold text-white hover:text-yellow-200"
            href="/"
          >
            HK Store
          </Link>
        </div>
        <div className="flex items-center align-top">
          <Link
            className="text-md mx-3 font-medium text-white hover:text-yellow-200 hover:border-b-2 hover:border-b-yellow-200"
            href="/"
          >
            <span class="material-symbols-outlined">home</span>
          </Link>
          <Link
            className="text-md mx-3 font-medium text-white hover:text-yellow-200 hover:border-b-2 hover:border-b-yellow-200"
            href="/products"
          >
            <span class="material-symbols-outlined">inventory_2</span>
          </Link>
          <Link
            className="text-md mx-3 font-medium text-white hover:text-yellow-200 hover:border-b-2 hover:border-b-yellow-200"
            href="/cart"
          >
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
