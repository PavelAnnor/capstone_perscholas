


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
          Disover all you can do with MangaDex
        </h2>

        <FeaturesGrid>
          <FeaturesGridCard
            icon={
              <UserRoundPen
                size={50}
                className="rounded-2xl p-2 bg-blue-400"
              ></UserRoundPen>
            }
            header="Secure User Login"
            desc="Reading lists, notes, and other created things will can be saved to user accounts"
          ></FeaturesGridCard>

          <FeaturesGridCard
            icon={
              <Library
                size={50}
                className="rounded-2xl p-2 bg-[#fa0101]"
              ></Library>
            }
            header="Creating Reading Lists"
            desc="Reading lists can be created to keep track of progress. You can also add content you want to read to lists as part of a wishlist."
          ></FeaturesGridCard>

          <FeaturesGridCard
            icon={
              <NotebookPen
                size={50}
                className="rounded-2xl p-2 bg-[green]"
              ></NotebookPen>
            }
            header="Generate Documents"
            desc="Crate various note taking documents incluidng chapter summaries, volume notes, compendiums, and personal thoughts"
          ></FeaturesGridCard>
        </FeaturesGrid>
      </SectionWrapper>
    );


}