import Container from "../components/Container";
import { PageWrapper } from "../components/PageWrapper";
import Timeline from "../components/Timeline";

export default function Contact() {
  return (
    <PageWrapper>
      <h1>
        <Container>
          <div className="h-screen">
            <h1 className="bg-gradient-to-b from-white via-slate-200 to-black bg-clip-text text-heading -tracking-[0.8rem] text-transparent">
              Please just work
            </h1>
          </div>
        </Container>
      </h1>
      <Timeline />
    </PageWrapper>
  );
}
