import { For } from "solid-js";
import { posts } from "../stores/jobListingStore";
import { JobPostItem } from "./JobPostItem";

export const JobPostList = () => {
  return (
    <ul class="flex flex-col gap-10 md:gap-6 pt-14 pb-6 md:pt-[4.6875rem] md:pb-[7.5625rem]">
      <For each={posts.getPosts()}>{(detail) => <JobPostItem detail={detail} />}</For>
    </ul>
  );
};
