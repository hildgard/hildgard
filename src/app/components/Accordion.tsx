"use client";
import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

type AccordionProps = {
  title: string;
  children: ReactNode;
};

export default function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-6  overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full cursor-pointer text-left text-xl flex items-baseline justify-between"
      >
        {title}
        <ChevronDownIcon
          className={`h-5 w-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="py-2 overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
