import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="pb-8 pt-16 bg-bg">
      <div className="main-container border-b-1 border-hilgard ">
        <div className="flex justify-between pb-3">
          <div className="w-1/3">
            <p>© Copyright 2025 All Rights Reserved</p>
          </div>
          <div className="w-1/3 text-center">
            <Image
              width={28}
              height={29}
              className="inline-block"
              alt={"Pencil image of a grape leaf colored"}
              src="./grapeleaf-footer.svg"
            />
          </div>
          <div className="w-1/3 text-end ">
            <Link
              className="text-primary hover:text-primary-light hover:underline"
              href="https://linktr.ee/ucdavisvande"
            >
              UC Davis V&E
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
