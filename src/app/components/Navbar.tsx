"use client";

import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import Logo from "../../../public/images/Logo.svg";
import Link from "next/link";
import { BiMenuAltLeft } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Button from "./ui/Button";

const navigation = [
  { id: 1, name: "home", to: "/" },
  { id: 2, name: "contact", to: "/contact" },
  { id: 3, name: "project", to: "/projects" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(navigation[0].id);
  const path = usePathname();

  const handleClickLink = (id: number) => {
    setSelected(id);
  };

  return (
    <header className="z-50 h-auto border-b-[1px] border-white/20">
      <Container>
        <div className="flex flex-row items-center justify-between">
          {/* Logo for the website */}
          <div>
            <Link href="/">
              <Image
                src={Logo}
                alt="personal logo"
                loading="eager"
                className="h-[8.2rem] w-[8.2rem] pt-[0.8rem]"
              />
            </Link>
          </div>

          {/* Navigation menu for desktop */}
          <nav className="hidden md:block">
            <ul className="flex flex-row items-center space-x-16">
              {navigation.map((item, index) => (
                <li key={index} className="relative">
                  <Link href={item.to} className="text-p font-bold capitalize">
                    {item.to === path && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 top-full block h-[0.5px] w-full bg-white"
                      />
                    )}
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Button title="Download CV" />
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <button className="block md:hidden">
            <BiMenuAltLeft
              onClick={() => setIsOpen(true)}
              className="h-[5rem] w-[5rem]"
            />
            <span className="sr-only">Toogle Menu</span>
          </button>

          <Transition
            as="div"
            show={isOpen}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog className="md:hidden" onClose={setIsOpen}>
              <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                aria-hidden="true"
              />
              <Dialog.Panel className="fixed right-0 top-0 z-50 h-screen w-1/2 origin-right overflow-y-auto border-l-[0.5px] border-white/20 bg-black">
                <div className="mx-[1.7rem] mt-[0.6rem] flex min-h-[11vh] flex-row items-center justify-between border-b-[0.5px] border-white/20">
                  <Dialog.Title as="h3" className="text-title">
                    Menu
                  </Dialog.Title>
                  <button>
                    <AiOutlineClose
                      className="h-[5rem] w-[5rem]"
                      onClick={() => setIsOpen(false)}
                    />
                  </button>
                </div>
                <nav className="-mt-[10vh] h-full">
                  <ul className="my-auto flex h-full flex-col items-center justify-center space-y-[3rem]">
                    {navigation.map((item) => (
                      <li key={item.id}>
                        <Link href={item.to} className="text-[3rem] capitalize">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/"
                        className="my-6 rounded-full border-[1px] border-white/70 px-6 py-4 text-[2.5rem]"
                      >
                        Download CV
                      </Link>
                    </li>
                  </ul>
                </nav>
              </Dialog.Panel>
            </Dialog>
          </Transition>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
