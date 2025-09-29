import { Container } from "../layouts/Container";
import { posts } from "../stores/jobListingStore";
import { JobListingFilter } from "./JobListingFilter";
import { JobPostList } from "./JobPostList";

export const JobListing = () => {
  return (
    <section>
      <Container>
        <div class="relative">
          <h2 class="sr-only">Current hotest jobs!</h2>
          <p class="sr-only" aria-live="polite" aria-atomic="true">
            {`Matches ${posts.getPosts().length} items`}
          </p>
          <JobListingFilter />
          <JobPostList />
        </div>
      </Container>
    </section>
  );
};
