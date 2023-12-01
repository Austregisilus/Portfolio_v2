import React from "react";
import Container from "./Container";
import { AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="border-t border-white/20 py-10">
      <Container>
        <div className="my-10">
          <h2 className="text-subheading capitalize">Let's get started</h2>
        </div>
        <div className="my-10 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="flex items-center justify-between rounded-[16px] border-[0.5px] border-white/50 bg-zinc-900 px-8 py-6">
            <AiFillLinkedin className="h-[41px] w-[41px]" />
            <h6 className="text-[1.7rem]">Arsenio Kimani</h6>
          </div>

          <div className="flex items-center justify-between rounded-[16px] border-[0.5px] border-white/50 bg-zinc-900 px-8 py-6">
            <AiFillPhone className="h-[41px] w-[41px]" />
            <h6 className="text-[1.7rem]">0727 077525</h6>
          </div>

          <div className="flex items-center justify-between rounded-[16px] border-[0.5px] border-white/50 bg-zinc-900 px-8 py-6">
            <MdEmail className="h-[41px] w-[41px]" />
            <h6 className="text-[1.7rem]">enquire.arsenio@gmail.com</h6>
          </div>
        </div>
        <div>
          <p className="py-6 text-center text-p">Created by Arsenio Kimani</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
