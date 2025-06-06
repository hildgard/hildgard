import Link from "next/link";

const NavItems: React.FC = () => {
  return (
    <nav>
      <Link
        className="relative font-bold text-nav pe-2 me-2 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
        href="/#about"
      >
        About
      </Link>

      <Link
        className="relative font-bold text-nav pe-2 me-2 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
        href="/#selection"
      >
        Selection
      </Link>
      <Link
        className="relative font-bold text-nav pe-2 me-2 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
        href="/#purchase"
      >
        Purchasing
      </Link>
      <Link
        className="relative font-bold text-nav pe-2 me-2 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
        href="/#faq"
      >
        FAQs
      </Link>
      <Link
        className="relative font-bold text-nav hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
        href="https://docs.google.com/forms/d/1_xbRfVVhoxrf1WhNJ2NGPMpRd4FnJlNKz2uYTGnDK9A/viewform?edit_requested=true"
      >
        Contact
      </Link>
      {/* <Link
                className="font-bold border active:bg-[#521322] hover:bg-[#821D36] border-white py-1 px-5 me-4"
                href="/#history"
              >
                History
              </Link> */}
    </nav>
  );
};

export default NavItems;
