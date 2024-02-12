import React from "react";
import type { Metadata } from "next";
import { Projects } from "@/components/ui/Projects";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Keshi Emmanuel",
  description: "Some projects I have worked on!",
};

const page = () => {
  return (
    <section className="section">
      <div>
        <div>
          <h2 className="font-secondary animate-in text-primary text-3xl sm:text-4xl lg:text-5xl">
            Projects
          </h2>
          <p className="text-secondary text-lg animate-in">
            Some projects I have worked on!
          </p>
        </div>
        <div
          className="py-10 animate-in"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          {Projects.map((project, i) => (
            <article
              className="flex flex-col md:items-center lg:flex-row gap-5 p-8"
              key={i}
            >
              <img
                src={project?.image as string}
                height={300}
                className="drop-shadow"
                width={300}
                alt={project.title}
              />
              <div>
                <h2 className="text-primary text-center lg:text-justify font-secondary font-bold">
                  {project.title}.
                  <span className="font-teritary font-normal">
                    {project.time}
                  </span>
                </h2>
                <p className="text-center p-2 text-secondary text-sm lg:text-base  lg:text-left md:w-[300px]">
                  {project.description}
                </p>
                <div className="flex justify-center lg:justify-start">
                  <a
                    className="mr-3 bg-tertiary px-3 rounded-lg py-1 hover:scale-110 transition-all"
                    href={project.live_link}
                  >
                    <button
                      className="animate-in"
                      style={{ "--index": 5 } as React.CSSProperties}
                    >
                      <GlobeAltIcon className="w-[15px] inline" />{" "}
                      <span className="text-sm">Live</span>
                    </button>
                  </a>
                  <a
                    className="bg-tertiary px-3 rounded-lg py-1 hover:scale-110 transition-all"
                    href={project.githHub_link}
                  >
                    <button
                      className="animate-in"
                      style={{ "--index": 5 } as React.CSSProperties}
                    >
                      <GlobeAltIcon className="w-[15px] inline" />{" "}
                      <span className="text-sm whitespace-nowrap">
                        GitHub Code
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </article>
          ))}
          <h2>
            <a href="https://github.com/emmdeveloper" className="underline">
              Checkout my other projects on my GitHub repo
            </a>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default page;
