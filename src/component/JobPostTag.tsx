import { filters, type JobListingState } from "../stores/jobListingStore";
import { cn } from "../utils/cn";

interface JobPostTagProps {
  value: string;
  xClass?: string;
  type: keyof JobListingState["filters"];
  ariaLabel: string;
}

export const JobPostTag = (props: JobPostTagProps) => {
  return (
    <li>
      <button
        class={cn(
          "rounded-sm bg-green-50 pt-[0.5625rem] pr-[0.625rem] pb-[0.4375rem] pl-2 text-base leading-none font-bold tracking-[-0.01em] text-green-400 transition-colors hover:bg-green-400 hover:text-white",
          props.xClass,
        )}
        type="button"
        onClick={() => filters.addFilter(props.type, props.value)}
        aria-label={props.ariaLabel}
      >
        {props.value}
      </button>
    </li>
  );
};
