import React from "react";
import type { Metadata } from "next";
import ConnectLinks from "@/components/ui/ConnectLinks";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

export const metadata: Metadata = {
  title: "Contact | Keshi Emmanuel",
  description: "A software Engineer with passion for building cool things",
};

const page = () => {
  return (
    <section className="section mt-7">
      <aside>
        <aside className="flex flex-col">
          <h2
            className="text-center text-4xl font-secondary animate-in"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            Keshi Emmanuel
          </h2>
          <p
            className="text-center py-2 w-[500px] mx-auto animate-in"
            style={{ "--index": 6 } as React.CSSProperties}
          >
            Software engineer who loves building cool stuff with code. in
            addition to coding , i play games ✌.
          </p>
        </aside>
        <aside className="mt-20 flex flex-col items-center w-full gap-5">
          {ConnectLinks.map((link, i) => (
            <a
              href={link.href}
              key={i}
              className="flex p-4 rounded items-center w-full gap-2 bg-tertiary animate-in hover:scale-110 transition-all"
            >
              <span>{link.icon}</span>

              <p> {link.label}</p>

              <ArrowUpRightIcon className="w-[15px] ml-auto" />
            </a>
          ))}
        </aside>
      </aside>
    </section>
  );
};

export default page;
