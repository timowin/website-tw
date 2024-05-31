import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const placeholder: string = "placeholder";

function NavList() {
  return (
    <ul className="my-2 pb-20flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        placeholder={placeholder}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium uppercase font-bold"
      >
        <a
          onClick={() => scrollToSection("#aboutme")}
          href={"#aboutme"}
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          About me
        </a>
      </Typography>
      <Typography
        placeholder={placeholder}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium uppercase font-bold"
      >
        <a
          href="#projects"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Projects
        </a>
      </Typography>
      <Typography
        placeholder={placeholder}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium uppercase font-bold"
      >
        <a
          href="#experience"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Experience
        </a>
      </Typography>
      <Typography
        placeholder={placeholder}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium uppercase font-bold"
      >
        <a
          onClick={() => scrollToSection("#certifications")}
          href="#certifications"
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Certifications
        </a>
      </Typography>
      <Typography
        placeholder={placeholder}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium uppercase font-bold"
      >
        <a
          onClick={() => scrollToSection("#education")}
          href={"#education"}
          className="flex items-center hover:text-blue-500 transition-colors"
        >
          Education
        </a>
      </Typography>
      <Typography
        placeholder={placeholder}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium uppercase font-bold"
      >
        <Button
          className="w-40 bg-primary rounded-full"
          placeholder={undefined}
          variant="filled"
        >
          Contact
        </Button>
      </Typography>
    </ul>
  );
}

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      placeholder={placeholder}
      className="bg-gray max-w-screen-lg border-0 mx-auto px-4 lg:px-0 shadow-none rounded-none snap-start"
    >
      <div className="flex items-center justify-between text-primary">
        <Typography
          placeholder={placeholder}
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          placeholder={placeholder}
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
