import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#1a2b4b] text-white px-8 py-3 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/">
          <div className="relative w-10 h-10">
             <Image 
              src="/logo.png" 
              alt="SR Group Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 text-sm md:text-base">
        <Link href="/" className="hover:text-gray-300 transition-colors">
          Home
        </Link>
        <Link href="#services" className="hover:text-gray-300 transition-colors">
          Services
        </Link>
        <Link href="#about" className="hover:text-gray-300 transition-colors">
          About us
        </Link>
        <Link 
          href="#contact" 
          className="bg-white text-[#1a2b4b] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
