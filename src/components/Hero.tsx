import { Button } from "@material-tailwind/react";
import React from "react";
import timoimage from "../images/timo_winkler.jpeg";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex">
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
          Welcome to my digital space! I'm a professional Software Developer on
          a journey of turning ideas into elegant and efficient software
          solutions. With a love for clean code and a knack for problem-solving,
          I bring creativity and precision to every project.
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
  );
};

export default Hero;
