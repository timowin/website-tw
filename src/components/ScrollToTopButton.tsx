import React, { useEffect, useState } from "react";
import useScrollDirection from "../helperFunctions/useScrollDirection";
import { ScrollDirectionEnum } from "../Enums";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollDir = useScrollDirection();

  useEffect(() => {
    if (scrollDir === ScrollDirectionEnum.UP) {
      setIsVisible(false);
    }
    if (scrollDir === ScrollDirectionEnum.DOWN) {
      setIsVisible(true);
    }
  }, [scrollDir]);

  let dependentClass = isVisible ? "hidden" : "block";

  return (
    <ArrowUpIcon
      onClick={scrollToTop}
      className={`transition duration-300 hover:cursor-pointer hover:scale-125 fixed bottom-0 right-0 text-white bg-primary p-2 mb-4 mr-4 h-10 border-2 border-white rounded-full ${dependentClass}`}
    />
  );
}
