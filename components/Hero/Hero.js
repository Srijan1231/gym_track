"use client";
import React from "react";
import Image from "next/image";
import hero from "../asset/hero.jpg";
export const Hero = () => {
  return (
    <div>
      <hero className="lg:flex md:flex lg:flex-row md:flex-row gap-2 overflow-x-hidden  flex flex-col-reverse">
        <div className="pt-7 lg:text-9xl md:text-7xl text-4xl flex      text-lime-400 dark:bg-fuchsia-400 dark:text-lime-400">
          <span className="leading-snug">
            `GymTrack - Where Fitness Becomes a Lifestyle. <br />
            Start your transformation today!`
          </span>
        </div>

        <Image
          src={hero}
          width={650}
          height={400}
          alt="Picture of the hero"
          className="object-cover md:order-last h mx-auto  md:ml-0"
        />
      </hero>
    </div>
  );
};
