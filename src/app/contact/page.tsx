import BarChart from "../components/Barchart";
import Barchart from "../components/Barchart";
import ContactHero from "../components/ContactHero";
import Container from "../components/Container";
import { PageWrapper } from "../components/PageWrapper";
import Talents from "../components/Talents";
import Timeline from "../components/Timeline";
import ScrollButton from "../components/ui/ScrollButton";

export default function Contact() {
  return (
    <PageWrapper>
      <ContactHero />
      <Container>
        <Talents />
      </Container>
      <Timeline />
      <ScrollButton />
    </PageWrapper>
  );
}
