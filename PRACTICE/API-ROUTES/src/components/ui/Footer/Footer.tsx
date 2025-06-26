import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo / Site Name */}
          <Link href="/" className="text-xl font-semibold text-gray-900">
            MySite
          </Link>

          {/* Footer Links */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <Link href="/about" className="hover:text-black transition">
              About
            </Link>
            <Link href="/services" className="hover:text-black transition">
              Services
            </Link>
            <Link href="/contact" className="hover:text-black transition">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-black transition">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} MySite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
