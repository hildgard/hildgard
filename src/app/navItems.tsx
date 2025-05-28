import Link from "next/link";

const NavItems: React.FC = () => {
  return (
    <nav>
      <Link
        className="font-bold text-white border active:bg-primary-dark hover:bg-primary-light border-white py-1 px-5"
        href="/#about"
      >
        About
      </Link>
      <Link
        className="font-bold text-white border active:bg-primary-dark hover:bg-primary-light border-white py-1 px-5 mx-4"
        href="/#purchase"
      >
        Purchasing
      </Link>

      <Link
        className="font-bold text-white border active:bg-[#521322] hover:bg-[#821D36] border-white py-1 px-5 "
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
