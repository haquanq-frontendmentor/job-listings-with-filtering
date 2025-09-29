import { For, Show } from "solid-js";
import type { JobPost } from "../types/JobPost";
import { JobPostTag } from "./JobPostTag";
import { RovingFocus } from "./RovingFocus";

interface JobPostItemProps {
  detail: JobPost;
}

export const JobPostItem = (props: JobPostItemProps) => {
  return (
    <li class="relative rounded-md bg-white p-6 shadow-lg md:px-10 md:py-8 lg:flex lg:items-center lg:justify-between">
      <Show when={props.detail.featured}>
        <div class="absolute top-0 bottom-0 left-0 w-1 rounded-l-md bg-green-400"></div>
      </Show>
      <div class="items-start border-b border-gray-400 pt-3 pb-[1.1875rem] md:flex md:gap-6 lg:border-none lg:p-0">
        <img
          class="absolute -top-6 left-6 aspect-square w-12 shrink-0 md:static md:w-22"
          src={props.detail.logo}
          alt=""
        />
        <div>
          <p class="relative h-6 mb-[0.875rem] flex w-fit items-center gap-4 text-[0.9375rem] leading-[1.125rem] font-bold text-green-400 md:mb-[0.625rem] md:text-lg">
            <span>{props.detail.company}</span>
            <span class="flex gap-2 text-sm leading-none tracking-[-0.02em] text-white uppercase *:rounded-full *:pt-[0.4375rem] *:pr-2 *:pb-[0.1875rem] *:pl-[0.5625rem]">
              <Show when={props.detail.new}>
                <span class="bg-green-400">New!</span>
              </Show>
              <Show when={props.detail.featured}>
                <span class="bg-green-900">Feautured</span>
              </Show>
            </span>
          </p>
          <h3 class="mb-4 text-[0.9375rem] md:mb-[0.625rem] md:text-[1.375rem] md:leading-6">
            <a class="transition-colors hover:text-green-400" href="">
              {props.detail.position}
            </a>
          </h3>
          <p class="flex items-center text-base leading-none md:text-lg">
            <span>{props.detail.postedAt}</span>
            <span class="mx-[0.625rem] block aspect-square w-1 rounded-full bg-gray-400 opacity-70 md:mr-[1rem] md:ml-[1.0625rem]"></span>
            <span>{props.detail.contract}</span>
            <span class="mx-[0.625rem] block aspect-square w-1 rounded-full bg-gray-400 opacity-70 md:mr-[1rem] md:ml-[1.0625rem]"></span>
            <span>{props.detail.location}</span>
          </p>
        </div>
      </div>
      <RovingFocus>
        <ul class="flex flex-wrap gap-4 pt-4 md:pt-8 lg:p-0">
          <JobPostTag type="roles" value={props.detail.role} ariaLabel={`Filter ${props.detail.role} role`} />
          <JobPostTag type="levels" value={props.detail.level} ariaLabel={`Filter ${props.detail.level} level`} />
          <For each={props.detail.tools}>
            {(tool) => <JobPostTag type="tools" value={tool} ariaLabel={`Filter ${tool} tool`} />}
          </For>
          <For each={props.detail.languages}>
            {(language) => <JobPostTag type="languages" value={language} ariaLabel={`Filter ${language} language`} />}
          </For>
        </ul>
      </RovingFocus>
    </li>
  );
};
