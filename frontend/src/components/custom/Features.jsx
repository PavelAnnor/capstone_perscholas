


import { UserRoundPen } from "lucide-react";
import { Library } from "lucide-react";
import { NotebookPen } from "lucide-react";


import SectionWrapper from "./SectionWrapper.jsx";
import FeaturesGrid from "./FeaturesGrid.jsx";
import FeaturesGridCard from "./FeaturesGridCard.jsx";


export default function Features(){



    return (
      <SectionWrapper>
        <h1 className="mt-auto text-6xl mb-3 relative z-5 text-[var(--text-blue-primary)] ">
          Availabe Features
        </h1>
        <h2 className="text-xl text-[var(--text-color-primary)] ">
          Disover all you can do with MangaLib
        </h2>

        <FeaturesGrid>
          <FeaturesGridCard
            icon={
              <UserRoundPen
                size={50}
                className="rounded-2xl p-2 bg-blue-400"
              ></UserRoundPen>
            }
            header="Account Creation & Login"
            desc="Create an account and log in to access your personal library and saved documents anytime."
          ></FeaturesGridCard>

          <FeaturesGridCard
            icon={
              <Library
                size={50}
                className="rounded-2xl p-2 bg-[#fa0101]"
              ></Library>
            }
            header="Library Creation"
            desc="Add various official and unoffical titles to your library, to keep track of what you're reading."
          ></FeaturesGridCard>

          <FeaturesGridCard
            icon={
              <NotebookPen
                size={50}
                className="rounded-2xl p-2 bg-[green]"
              ></NotebookPen>
            }
            header="Generate Documents"
            desc="Create, edit, and delete a variety of note-taking documents, including chapter summaries, volume notes, compendiums, and personal thoughts."
          ></FeaturesGridCard>
        </FeaturesGrid>
      </SectionWrapper>
    );


}