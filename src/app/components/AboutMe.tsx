import React from "react";
import Container from "./Container";
import SectionIntro from "./ui/SectionIntro";

const AboutMe = () => {
  return (
    <section className="bg-zinc-900 py-10">
      <Container>
        <SectionIntro
          subtitle="What is my story told by me..."
          title="About me"
        />
        <div className="grid grid-cols-1 place-content-center place-items-center gap-16 py-32 lg:grid-cols-3">
          <div>
            <figure>
              <div className="h-[200px] w-[175px] -rotate-12 rounded-[16px] bg-slate-700"></div>
            </figure>
          </div>
          <article className="col-span-2 rounded-[16px] border-[0.5px] border-white/50 bg-black p-10">
            <h6 className="py-5 text-title">Story so far...</h6>
            <p className="text-p leading-[2.4rem] text-white/70">
              My name is Arsenio Kimani. A graduate from Strathmore University
              looking for a career in data analysis. Even though I want to
              pursue a career in data analysis, though out my journey I have
              also acquired skills in front-end web development and User
              interface design. For data analysis, I have acquired skills in
              data manipulation, data visualization and machine learning. I
              would appreciate to be apart of a company. Something like this is
              what I would like to appear in my about me. Explain the journey to
              get where you are today and that you want to advance my skills and
              experience
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
