import React from "react";
import Logo from "../../../public/images/Logo.svg";
import motion from "framer-motion";

const Preloader = () => {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <img
        src={Logo}
        alt="personal logo"
        loading="eager"
        className="h-[10rem] w-[10rem]"
      />
    </section>
  );
};

export default Preloader;
