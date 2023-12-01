import React from "react";
import Container from "./Container";
import TimeLeft from "./ui/TimeLeft";
import TimeRight from "./ui/TimeRight";
import SectionIntro from "./ui/SectionIntro";
import Diploma from "../../../public/images/diploma-svgrepo-com.svg";
import Volunteer from "../../../public/images/volunteer-kindness-care-heart-love-svgrepo-com.svg";
import Career from "../../../public/images/career-svgrepo-com.svg";
import Graduate from "../../../public/images/graduate-svgrepo-com.svg";

const Timeline = () => {
  return (
    <section className="bg-zinc-900 py-10">
      <Container>
        <SectionIntro
          subtitle="What I am proud of..."
          title="Personal achievements"
        />
        <TimeLeft
          Pic={Diploma}
          Heading="Diploma.."
          Content="Graduated with a Merit from strathmore university with a diploma in business information Technology."
          Year="2014"
        />
        <TimeRight
          Pic={Volunteer}
          Heading="AIESEC Little Angel Program"
          Content="Went to Rwanda and participated in the Little angel program which involved teaching english."
          Year="2016"
        />
        <TimeLeft
          Pic={Volunteer}
          Heading="Volunteer in Kenya Institution of the Blind"
          Content="For my community service, I assisted as an assistant librarian at the Kenya Istitute of the blind."
          Year="2018"
        />
        <TimeRight
          Pic={Career}
          Heading="KPLC Industrial attachment"
          Content="Conducted my industrial attachment at KPLC as an iT support specialist."
          Year="2020"
        />
        <TimeLeft
          Pic={Graduate}
          Heading="Degree..."
          Content="Finished my Degree and graduated with a second upper."
          Year="2022"
          className="before:hidden"
        />
      </Container>
    </section>
  );
};

export default Timeline;
