import { createEffect } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";

interface RovingFocusProps {
  children: JSX.Element;
}

export const RovingFocus = (props: RovingFocusProps) => {
  let container: HTMLDivElement | undefined;

  createEffect(() => {
    if (!container) return;

    const focusables = Array.from(container.querySelectorAll("button")) as Array<HTMLButtonElement>;
    if (focusables.length === 0) return;

    let currentIndex = 0;

    focusables.forEach((element, index) => {
      element.tabIndex = -1;

      element.addEventListener("destroy", () => {
        focusables.splice(index, 1);
      });
    });

    focusables[currentIndex].tabIndex = 0;

    const setFocus = (index: number) => {
      focusables[currentIndex].tabIndex = -1;
      currentIndex = index;
      focusables[currentIndex].tabIndex = 0;
      focusables[currentIndex].focus();
    };

    const selectFirst = () => {
      setFocus(0);
    };

    const selectLast = () => {
      setFocus(focusables.length - 1);
    };

    const selectPrev = () => {
      setFocus((currentIndex + focusables.length - 1) % focusables.length);
    };

    const selectNext = () => {
      setFocus((currentIndex + 1) % focusables.length);
    };

    container.addEventListener("keydown", (e) => {
      if (e.shiftKey) return;

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        selectNext();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        selectPrev();
      } else if (e.key === "Home") {
        e.preventDefault();
        selectFirst();
      } else if (e.key === "End") {
        e.preventDefault();
        selectLast();
      }
    });
  });

  return <div ref={container}>{props.children} </div>;
};
