import { useEffect, useState } from "react";
import { ScrollDirectionEnum } from "../Enums";

const useScrollDirection = () => {
  const threshold = 10;
  const [scrollDir, setScrollDir] = useState(ScrollDirectionEnum.UP);

  useEffect(() => {
    // previous scroll Y position from window
    let previousScrollYPosition: number = window.scrollY;

    // boolean that calculated if the user scrolled more than threshold
    const scrolledMoreThanThreshold = (currentScrollYPosition: number) =>
      Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;

    const isScrollingUp = (currentScrollYPosition: number) =>
      currentScrollYPosition > previousScrollYPosition &&
      !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
      !(currentScrollYPosition > 0 && previousScrollYPosition === 0);

    const updateScrollDirection = () => {
      const currentScrollYPosition = window.scrollY;

      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        const newScrollDirection = isScrollingUp(currentScrollYPosition)
          ? ScrollDirectionEnum.DOWN
          : ScrollDirectionEnum.UP;
        setScrollDir(newScrollDirection);
        previousScrollYPosition =
          currentScrollYPosition > 0 ? currentScrollYPosition : 0;
      }
    };

    const onScroll = () => window.requestAnimationFrame(updateScrollDirection);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  console.log(scrollDir);
  return scrollDir;
};

export default useScrollDirection;
