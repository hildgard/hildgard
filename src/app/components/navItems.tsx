import Link from "next/link";

const NavItems: React.FC = () => {
  return (
    <nav>
      <Link
        className="font-bold text-nav pe-2 me-2 active:text-white active:underline hover:text-white"
        href="/#about"
      >
        About
      </Link>
      <Link
        className="font-bold text-nav pe-2 me-2 active:text-white active:underline hover:text-white"
        href="/#selection"
      >
        Selection
      </Link>
      <Link
        className="font-bold text-nav pe-2 me-2 active:text-white active:underline hover:text-white"
        href="/#purchase"
      >
        Purchasing
      </Link>
      <Link
        className="font-bold text-nav pe-2 me-2 active:text-white active:underline hover:text-white"
        href="/#faq"
      >
        FAQs
      </Link>
      <Link
        className="font-bold text-nav active:text-white active:underline hover:text-white"
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
