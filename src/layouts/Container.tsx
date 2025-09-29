import { type JSX } from "solid-js";

export const Container = (props: { children: JSX.Element }) => {
  return <div class="mx-auto w-[min(100vw-3rem,69.375rem)]">{props.children}</div>;
};
