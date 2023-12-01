import React from "react";
import Container from "./Container";

const data = [
  {
    title: "Diploma..",
    content:
      "Graduated with a Merit from strathmore university with a diploma in business information Technology.",
  },
  {
    title: "AIESEC Little Angel Program",
    content:
      "Went to Rwanda and participated in the Little angel program which involved teaching english.",
  },
  {
    title: "Volunteer in Kenya Institution of the Blind",
    content:
      "For my community service, I assisted as an assistant librarian at the Kenya Istitute of the blind.",
  },
  {
    title: "KPLC Industrial attachment",
    content:
      "Conducted my industrial attachment at KPLC as an iT support specialist.",
  },
  {
    title: "Degree...",
    content: "Finished my Degree and graduated with a second upper.",
  },
];

const Timeline = () => {
  return (
    <section className="bg-zinc-900 py-10">
      <Container>
        <div className="w-full bg-red-800">
          <div className="flex w-1/3 items-start bg-purple-500">
            <div className="w-1/2 bg-slate-500">
              <h6>Diploma..</h6>
              <p>
                Graduated with a Merit from strathmore university with a diploma
                in business information Technology.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Timeline;
