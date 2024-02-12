import React from "react";
import ConnectLinks from "@/components/ui/ConnectLinks";
import type { Metadata } from "next";
import SkillsIcon from "@/components/ui/SkillsIcons";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
export const metadata: Metadata = {
  title: "About | Keshi Emmanuel",
  description: "A software Engineer with passion for building cool things",
};
const page = () => {
  return (
    <section className="section">
      <div className="mt-10">
        <h2
          className="font-secondary animate-in text-primary text-3xl sm:text-4xl lg:text-5xl"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          About me
        </h2>
        <p
          className="text-secondary text-lg animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          Just a glimpse
        </p>
      </div>
      <div className="flex flex-col gap-5 lg:flex-row lg:gap-10 pt-32">
        <h2
          className="font-secondary text-2xl lg:text-base text-secondary animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          About
        </h2>

        <div className="w-[300px] sm:w-[500px]">
          <p
            className="animate-in"
            style={{ "--index": 3 } as React.CSSProperties}
          >
            Hello World, I'm Keshi Emmanuel!
            <div className="mb-5"> </div>I have passion for tech and designs and
            are looking for ways to add them to my work
            <div className="mb-5"> </div>
            in addiction to coding ,I love playing racing games and reading
            about tech happenings around the globe
            <div className="mb-5"> </div>
            When am not on desk I am probably playing games like football or
            watching movies and vlog's :)
          </p>
        </div>
      </div>
      <div className="flex gap-5 flex-col lg:flex-row lg:gap-10 pt-20">
        <h2
          className="font-secondary text-2xl lg:text-base text-secondary animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          Connect
        </h2>

        <div
          className="flex flex-wrap gap-5 items-center relative animate-in"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          {ConnectLinks.map((btn, i) => (
            <div className="">
              <button
                key={i}
                className="flex items-center p-2 bg-tertiary rounded-xl"
              >
                <span className="mr-2">{btn.icon}</span>
                <a className="mr-2 text-sm" href={btn.href}>
                  {btn.label}
                </a>
                <ArrowUpRightIcon className="w-[15px]" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <aside className="pt-20 gap-7  flex flex-col lg:flex-row lg:gap-10">
        <div>
          <h2
            className="font-secondary text-2xl lg:text-base text-secondary animate-in"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            Skills
          </h2>
        </div>
        <div
          className="flex flex-wrap gap-3 animate-in"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          {SkillsIcon.map((btn, i) => (
            <button
              key={i}
              className="flex items-center p-2 bg-tertiary gap-2 rounded-xl"
            >
              <span>{btn.icon}</span>
              <p className="text-sm">{btn.label}</p>
            </button>
          ))}
        </div>
      </aside>
    </section>
  );
};

export default page;
