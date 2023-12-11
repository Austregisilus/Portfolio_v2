import Container from "./Container";
import HeroTitle from "./ui/HeroTitle";

const ContactHero = () => {
  return (
    <section className="h-auto bg-zinc-900">
      <Container>
        <div className="grid grid-cols-1 py-10 md:grid-cols-2">
          <div>
            {/* Where you add the hero text */}
            <HeroTitle title="DREAM PLAN ACT ACHIEVE" />
          </div>
          <div className="relative">
            <div className="m-6 flex flex-col rounded-[16px] border-[0.5px] border-white/30 bg-black p-6 lg:absolute lg:bottom-1/2">
              <h6 className="py-4 text-title">Qualifications...</h6>
              <p className="pb-2 text-p leading-[2.4rem] text-white/70">
                Throughout the years, I have acquired numerous skills and used
                different tools in order to grow myself personal and improve my
                skillset. From software such as Microsoft Excel and different
                programming languages.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;
