import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="pb-8 pt-16 bg-bg">
      <div className="main-container border-b-1 border-hilgard ">
        <div className="flex justify-between pb-3">
          <div className="w-1/3">
            <p>© Copyright 2025 All Rights Reserved</p>
          </div>
          <div className="w-1/3 text-end">
            <Image
              width={28}
              height={29}
              className="inline-block"
              alt={"Pencil image of a grape leaf colored"}
              src="./grapeleaf-footer.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
