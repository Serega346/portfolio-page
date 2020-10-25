import React from "react";

import { About } from "../../components/About";
import { Skills } from "../../components/Skills";
import { Education } from "../../components/Education";
import { RecentWorks } from "../../components/RecentWorks";

export const Main = () => {
  return (
    <main>
      <About />
      <Skills />
      <Education />
      <RecentWorks />
    </main>
  );
};
