import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import { PageWrapper } from "./components/PageWrapper";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ScrollButton from "./components/ui/ScrollButton";

export default function Home() {
  return (
    <main>
      <PageWrapper>
        <Hero />
        <Skills />
        <AboutMe />
        <Projects />
        <Contact />
        <ScrollButton />
      </PageWrapper>
    </main>
  );
}
