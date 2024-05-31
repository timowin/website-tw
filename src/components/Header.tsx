import React from "react";

function Header() {
  return (
    <div className="h-11 bg-primary place-items-center flex sticky top-0">
      <div className="max-w-screen-lg w-full mx-auto flex flex-col lg:flex-row justify-between uppercase text-gray text-sm font-medium">
        <p className="cursor-pointer font-bold">Logo</p>
        <p className="cursor-pointer">Certifications</p>
        <p className="cursor-pointer">Projects</p>
        <p className="cursor-pointer">Experience</p>
        <p className="cursor-pointer">Education</p>
      </div>
    </div>
  );
}

export default Header;
