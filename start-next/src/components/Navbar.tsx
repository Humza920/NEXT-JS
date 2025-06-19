// components/Navbar.tsx

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-gray-800">
            <Link href="/">MyBrand</Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Home
            </Link>
            <Link
              href="/About"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </Link>
            <Link
              href="/Services"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Services
            </Link>
            <Link
              href="/Contacts"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </Link>
          </div>

          {/* Button (optional) */}
          <div className="hidden md:flex gap-2">
            <Link
              href="/Login"
              className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Login
            </Link>
            <Link
              href="/dashboared"
              className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
