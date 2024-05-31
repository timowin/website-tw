import React, { useEffect, useState } from "react";
import useScrollDirection from "../helperFunctions/useScrollDirection";
import { ScrollDirectionEnum } from "../Enums";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasMinScrollHeight, setHasMinScrollHeight] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const scrollDir = useScrollDirection();
  const minDistanceThreshold = 600;

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsVisible(false);
  }

  useEffect(() => {
    function handleScroll() {
      setHasMinScrollHeight(window.scrollY > minDistanceThreshold);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollDir === ScrollDirectionEnum.UP) {
      setIsScrollingUp(true);
    }
    if (scrollDir === ScrollDirectionEnum.DOWN) {
      setIsScrollingUp(false);
    }
  }, [scrollDir]);

  useEffect(() => {
    if (isScrollingUp && hasMinScrollHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isScrollingUp, hasMinScrollHeight]);

  let dependentClass = isVisible ? "block opacity-100" : "hidden opacity-0";

  return (
    <ArrowUpIcon
      onClick={scrollToTop}
      className={`transition duration-300 hover:cursor-pointer hover:scale-125 fixed bottom-0 right-0 z-50 text-white bg-primary p-2 mb-4 mr-4 h-12 border-2 border-white rounded-full ${dependentClass}`}
    />
  );
}
