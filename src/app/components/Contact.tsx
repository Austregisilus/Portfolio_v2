import React from "react";
import Container from "./Container";
import SectionIntro from "./ui/SectionIntro";

const Contact = () => {
  const className =
    "h-[5rem] my-4 w-full rounded-lg bg-black px-4 text-p focus:border-violet-900 focus:bg-zinc-900";

  const label = "text-p";

  const EmailClass =
    "h-[5rem] my-4 w-full lg:w-3/4 rounded-lg bg-black px-4 text-p focus:border-violet-900 focus:bg-zinc-900";

  const MessageClass =
    "h-[10rem] my-4 w-full lg:w-3/4 rounded-lg bg-black px-4 text-p focus:border-violet-900 focus:bg-zinc-900";

  return (
    <section className="h-auto bg-zinc-900 py-10">
      <Container>
        <SectionIntro
          subtitle="Like what you see, reach out..."
          title="Contact me"
        />

        {/* Create the form for users to fill */}
        <form>
          <div className="rounded-[16px] border-[0.5px] border-white/50 bg-black px-10 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
              {/* First name */}
              <div>
                <label htmlFor="firstName" className={label}>
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  className={className}
                />
              </div>
              {/* last name */}
              <div>
                <label htmlFor="last name" className={label}>
                  Last Name
                </label>
                <input
                  type="text"
                  name="last name"
                  id="last name"
                  placeholder="Last Name"
                  className={className}
                />
              </div>
            </div>
            {/* email */}
            <div className="flex flex-col">
              <label htmlFor="email" className={label}>
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className={EmailClass}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className={label}>
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className={MessageClass}
              />
            </div>

            <input
              type="submit"
              value="Send"
              className="h-18 mt-5 rounded-lg border-[0.5px] border-white/70 bg-black px-6 py-5 text-p"
            />
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
