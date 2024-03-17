import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Navbar() {
  return (
    <div className="container-md sm:px-10 md:px-10 lg:px-52 py-3  bg-teal-900">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link className="text-2xl font-bold text-white hover:text-yellow-200" href="/">
            HK Store
          </Link>
        </div>
        <div className="flex items-center">
          <Link className="text-md mx-3 font-medium text-white hover:text-yellow-200 hover:border-b-2 hover:border-b-yellow-200" href="/">
            Home
          </Link>
          <Link className="text-md mx-3 font-medium text-white hover:text-yellow-200 hover:border-b-2 hover:border-b-yellow-200" href="/cart">
          Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
