import React from "react";
import Container from "./Container";
import SectionIntro from "./ui/SectionIntro";
import DataAnalysis from "../../../public/images/data_analysis.svg";
import WebDevelopment from "../../../public/images/web_development.svg";
import UIUX from "../../../public/images/ui_ux.svg";
import Card from "./ui/Card";

const skills = [
  {
    id: 1,
    image: DataAnalysis,
    name: "Data analysis",
    description:
      "Analyzes data to uncover insights and trends providing valuable information for decision making and business strategies",
  },
  {
    id: 2,
    image: WebDevelopment,
    name: "Front end developer",
    description:
      "Focuses on creating user-friendly interfaces and enhancing user experiences through research, wireframing and visual design",
  },
  {
    id: 3,
    image: UIUX,
    name: "UI/UX design",
    description:
      "Builds the visual and interactive elements of a website or application using HTML, CSS and Javascript",
  },
];

const Skills = () => {
  return (
    <section className="h-auto py-10">
      <Container>
        <SectionIntro subtitle="What is it that I provide..." title="Service" />

        <div className="my-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {skills.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
