import React from "react";
import BarChart from "./Barchart";
import Radarchart from "./Radarchart";
import SectionIntro from "./ui/SectionIntro";

const Talents = () => {
  return (
    <section>
      <SectionIntro subtitle="Tools in my toolkit..." title="Skills" />
      <div className="my-10 flex flex-col gap-2 lg:flex-row">
        <div className="w-full lg:w-4/6">
          <BarChart />
        </div>
        <div className="flex w-full flex-col px-4 lg:w-2/6 lg:items-center lg:justify-center">
          <div className="rounded-[16px] border-[0.5px] border-white/70 bg-zinc-950 px-6 py-6">
            <h6 className="py-5 text-title">Technical skills...</h6>
            <p className="text-p leading-[2.4rem] text-white/70">
              Technical skills are the key to a successful career. They are
              skills you need to perform specific tasks that are related to your
              industry or field. As a data analysis or front-end developer, I
              have various tools in my toolkit. I'll name a few here:-
            </p>
            <ul className="list-disc pl-12 text-p leading-[2.4rem] text-white/70">
              <li>Microsoft Excel</li>
              <li>Python</li>
              <li>R</li>
              <li>HTML</li>
              <li>Javascript</li>
              <li>Others</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-10 flex flex-col lg:flex-row">
        <div className="flex w-full flex-col items-center justify-center px-4 lg:w-2/6">
          <div className="rounded-[16px] border-[0.5px] border-white/70 bg-zinc-950 px-6 py-6">
            <h6 className="py-5 text-title">Soft skills...</h6>
            <p className="text-p leading-[2.4rem] text-white/70">
              Soft skills are personal attributes that help one interact
              effectively with others. Though not an accurate representation of
              the personality of the person, they are a good way to help you
              achieve your goals. I have measured and shown my soft skills in
              the radar graph. For a brief summary the skills are:-
            </p>
            <ul className="list-disc pl-12 text-p leading-[2.4rem] text-white/70">
              <li>Communication</li>
              <li>Adaptability</li>
              <li>Teamwork</li>
              <li>Problem solving</li>
              <li>Creativity</li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-4/6">
          <Radarchart />
        </div>
      </div>
    </section>
  );
};

export default Talents;
