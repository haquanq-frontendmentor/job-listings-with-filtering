import { JobListing } from "./component/JobListing";
import { HeaderBackgroundDesktop, HeaderBackgroundMobile } from "./assets/images";

export const App = () => {
  return (
    <>
      <main class="min-h-screen bg-green-50">
        <h1 class="sr-only">This is just an example</h1>
        <div class="h-39 overflow-hidden bg-green-400 *:w-full *:object-cover">
          <img class="md:hidden" src={HeaderBackgroundMobile} alt="" />
          <img class="hidden h-full md:block" src={HeaderBackgroundDesktop} alt="" />
        </div>
        <JobListing />
      </main>
    </>
  );
};
