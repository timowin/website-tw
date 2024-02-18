import { Button } from "@material-tailwind/react";
import React from "react";
import timoimage from "../../images/timo_winkler.jpeg";

const HeroSection = () => {
  return (
    <section
      id="aboutme"
      className="h-screen max-w-screen-lg flex mx-auto px-6 lg:px-0"
    >
      <div className="flex flex-col-reverse -mt-40 lg:flex-row self-center">
        <div className="basis-2/3 grid content-center gap-4 pr-20">
          <p className="uppercase text-sm">Hi there, i'm</p>
          <div>
            <p className="font-bold text-6xl text-secondary">TIMO</p>
            <p className="font-bold text-6xl text-secondary">WINKLER</p>
            <p className="font-bold text-sm text-primary uppercase">
              M. Sc. Information Systems | Software Developer
            </p>
          </div>
          <p className="font-white">
            Welcome to my digital space! I'm a professional Software Developer
            on a journey of turning ideas into elegant and efficient software
            solutions. With a love for clean code and a knack for
            problem-solving, I bring creativity and precision to every project.
          </p>
          <Button
            className="w-40 bg-primary rounded-full"
            placeholder={undefined}
            variant="filled"
          >
            Let's work together
          </Button>
        </div>
        <div className="basis-1/3 my-auto">
          <img
            className="rounded-full border-4 border-secondary"
            src={timoimage}
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
