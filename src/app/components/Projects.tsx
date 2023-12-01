import React from "react";
import Container from "./Container";
import SectionIntro from "./ui/SectionIntro";
import ProjectCard from "./ui/ProjectCard";

const projects = [
  {
    id: 1,
    name: "Data analysis on some data",
    description:
      "The analysis seek to understand the reason for the low life expectancy of some countries compared to that of other regions",
  },
  {
    id: 2,
    name: "Data analysis on some data",
    description:
      "The analysis seek to understand the reason for the low life expectancy of some countries compared to that of other regions",
  },
  {
    id: 3,
    name: "Data analysis on some data",
    description:
      "The analysis seek to understand the reason for the low life expectancy of some countries compared to that of other regions",
  },
];

const Projects = () => {
  return (
    <section className="h-auto py-10">
      <Container>
        <SectionIntro
          subtitle="A sample of some of my works..."
          title="Projects"
        />
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            id={item.id}
            name={item.name}
            description={item.description}
          />
        ))}
      </Container>
    </section>
  );
};

export default Projects;
