import { Button } from "@material-tailwind/react";
import React from "react";
import timoimage from "../../images/timo_winkler.jpeg";

const HeroSection = () => {
  return (
    <section id="aboutme" className="max-w-screen-lg flex mx-auto px-4 lg:px-0">
      <div className="flex flex-col-reverse lg:flex-row self-center">
        <div className="basis-2/3 grid content-center gap-4 lg:pr-20">
          <p className="uppercase text-sm">Hi there, i'm</p>
          <div>
            <p className="font-bold text-6xl text-primary">TIMO</p>
            <p className="font-bold text-6xl text-primary">WINKLER</p>
            <p className="font-bold text-sm text-secondary uppercase">
              M. Sc. Information Systems | Software Developer
            </p>
          </div>
          <p>
            I am a professional Full-Stack Developer based in Germany,
            passionate about clean code, modern solutions, and aesthetic
            designs. I thrive on working with the latest technologies and best
            practices across all aspects of software development, from front-end
            and back-end development to provisioning and maintaining complex
            cloud infrastructure. If you would like to learn more, please feel
            free to contact me.
          </p>
          <Button
            className="w-40 bg-primary rounded-full"
            placeholder={undefined}
            variant="filled"
          >
            Contact me
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
