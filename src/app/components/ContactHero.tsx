import Container from "./Container";
import HeroTitle from "./ui/HeroTitle";

const ContactHero = () => {
  return (
    <section className="h-auto bg-zinc-900">
      <Container>
        <div className="grid grid-cols-1 py-10 md:grid-cols-2">
          <div>
            {/* Where you add the hero text */}
            <HeroTitle title="WHO IS ARSENIO KIMANI" />
          </div>
          <div className="relative">
            <div className="m-6 flex flex-col rounded-[16px] border-[0.5px] border-white/30 bg-black p-6 lg:absolute lg:bottom-1/2">
              <h6 className="py-4 text-title">Introduction...</h6>
              <p className="pb-2 text-p leading-[2.4rem] text-white/70">
                An aspiring graduate looking to break into the corporate world.
                Skills range from Frond-end development, UI/UX design and data
                analysis. Looking to improve my skills in any of these fields
                and an eager learner.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;
