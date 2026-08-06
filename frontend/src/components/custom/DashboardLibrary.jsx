import SectionWrapper from "./SectionWrapper";



export default function DashboardLibrary(){


    return (
      <SectionWrapper margin="">
        <main className="border-4">
          <p className="text-6xl border-2 border-blue-700 bg-blue-600 p-5">Manga Library</p>
          <div className="w-full grid grid-cols-4 border-green-600 border h-[50vh]">

          </div>
        </main>
      </SectionWrapper>
    );
}