import React from "react";
import type { Metadata } from "next";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Home | Keshi Emmanuel",
  description: "A software Engineer with passion for building cool things",
};

const page = () => {
  return (
    <section className="section">
      <div className="pl-0 lg:pl-4 pt-12 grid grid-cols-1">
        <p
          className="text-secondary animate-in"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          Hola 👋,
        </p>
        <h1 className="text-primary py-3 text-5xl lg:text-[4rem] font-primary">
          I'm Keshi Emmanuel
        </h1>
        <h2
          className="text-2xl lg:text-3xl text-secondary animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          Software Engineer
        </h2>
        <p
          className="text-secondary py-7 animate-in w-[300px] md:w-[400px] lg:w-[500px]"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          I'm Keshi Emmanuel, a Software engineer who love building cool things{" "}
          with code. in addiction to coding ,I also love playing games ,watching
          movies and reading about tech around the globe!
        </p>
        <div className="flex flex-wrap gap-1 pt-5">
          <a
            href="https://drive.google.com/file/d/1FZh5wRaEE2SgiWwdYMXUNB4eHbNJ34gH/view?usp=sharing"
            target="_blank"
            className="text-secondary flex gap-1 animate-in"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            <ArrowUpRightIcon className="text-secondary w-[24px]" />
            Download Resume
          </a>
          <button>
            <Link
              href="/contact"
              className="text-secondary flex gap-1 animate-in"
              style={{ "--index": 2 } as React.CSSProperties}
            >
              <ArrowUpRightIcon className="text-secondary w-[24px]" />
              More ways to connect
            </Link>
          </button>
        </div>
        <div className="pt-16 flex flex-col gap-3 md:gap-6 sm:flex-row lg:gap-12 lg:flex-row mt-8">
          <div>
            <h2 className="text-secondary font-primary">Testimonials </h2>
          </div>
          <div>
            <h2 className="font-primary">Oluchukwu Bartholomew </h2>
            <p
              className="pt-7 text-secondary animate-in w-[270px] md:w-[400px] lg:w-[500px]"
              style={{ "--index": 2 } as React.CSSProperties}
            >
              At the tender age of 15, Keshi Emmanuel has defied expectations
              and emerged as a promising web developer. With a passion for
              coding and an insatiable curiosity for technology, he has not only
              conceptualized but also completed several web projects, showcasing
              an impressive blend of skill, determination, and creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
