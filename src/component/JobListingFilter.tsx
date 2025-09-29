import { For, Show } from "solid-js";
import { filters } from "../stores/jobListingStore";
import { JobListingFilterItem } from "./JobListingFilterItem";

export const JobListingFilter = () => {
  return (
    <Show when={!filters.isEmpty()}>
      <div class="p-5 flex justify-between bg-white rounded-md items-center gap-4 md:px-10 md:py-5 md:absolute md:-top-[2.25rem] md:left-0 md:right-0">
        <ul class="flex flex-wrap gap-4 items-start">
          <For each={filters.getFilters().roles}>
            {(role) => <JobListingFilterItem type="roles" value={role} ariaLabel={`Remove ${role} filter`} />}
          </For>
          <For each={filters.getFilters().levels}>
            {(level) => <JobListingFilterItem type="levels" value={level} ariaLabel={`Remove ${level} filter`} />}
          </For>
          <For each={filters.getFilters().tools}>
            {(tool) => <JobListingFilterItem type="tools" value={tool} ariaLabel={`Remove ${tool} filter`} />}
          </For>
          <For each={filters.getFilters().languages}>
            {(language) => (
              <JobListingFilterItem type="languages" value={language} ariaLabel={`Remove ${language} filter`} />
            )}
          </For>
        </ul>
        <button
          onClick={() => filters.clearAll()}
          class="font-bold text-green-400 hover:underline"
          type="button"
          aria-label="Clear all filters"
        >
          Clear
        </button>
      </div>
    </Show>
  );
};
