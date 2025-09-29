import { RemoveIcon } from "../assets/images";
import { filters, type JobListingState } from "../stores/jobListingStore";
import { cn } from "../utils/cn";

interface JobListingFilterItem {
  value: string;
  xClass?: string;
  type: keyof JobListingState["filters"];
  ariaLabel: string;
}

export const JobListingFilterItem = (props: JobListingFilterItem) => {
  return (
    <li class="flex items-center pl-2 gap-[0.625rem] font-bold tracking-[-0.01em] bg-green-50 rounded-sm text-green-400">
      {props.value}
      <button
        class={cn(
          "rounded-sm bg-green-400 hover:bg-green-900 transition-colors flex justify-center items-center w-8 aspect-square ",
          props.xClass,
        )}
        type="button"
        aria-label={props.ariaLabel}
        onClick={() => filters.removeFilter(props.type, props.value)}
      >
        <img src={RemoveIcon} alt="" />
      </button>
    </li>
  );
};
