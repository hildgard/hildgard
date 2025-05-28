"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import NavItems from "./navItems";
import Link from "next/link";

export default function StickyNav() {
  const [show, setShow] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky nav when #about is NOT visible
        setShow(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0, // Triggers as soon as any part exits the viewport
      }
    );

    const section = document.getElementById("intro");
    if (section) {
      sectionRef.current = section;
      observer.observe(section);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-700 ease-in-out ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      } bg-hilgard shadow-md`}
    >
      <div className="flex flex-row justify-between items-center py-4 px-16">
        <div className="w-1/2">
          <Link href="/#">
            <Image
              src="./hilgard631-light.svg"
              width={200}
              height={40}
              alt={"Hilgard631 Logo"}
            />
          </Link>
        </div>
        <div className="w-1/2 text-end">
          <NavItems />
        </div>
      </div>
    </div>
  );
}
