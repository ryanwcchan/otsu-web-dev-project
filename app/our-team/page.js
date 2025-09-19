import { executives, directors, staff } from "../employees.js";
import TeamSection from "@/components/TeamSection.js";

export const metadata = {
  title: "Our Team | Contact Us",
  description:
    "The OTSU is led by student executives and a board of directors who are elected annually, and supported by a team of full-time staff.",
};

export default async function OurTeamPage() {
  return (
    <main className="flex flex-col min-h-screen items-center w-full justify-center">
      <div className="w-full max-w-6xl !px-4">
        <div className="sectionHeader rounded-b-xl">
          <h1 className="text-2xl font-bold !pl-4 !text-white !py-6">
            Our Team
          </h1>
        </div>
        <TeamSection title={"Executives"} members={executives} />
        <div className="w-full bg-gray-100 h-1.5 rounded-lg"></div>
        <TeamSection title={"Directors"} members={directors} />
        <div className="w-full bg-gray-100 h-1.5 rounded-lg"></div>
        <TeamSection title={"Staff"} members={staff} />
      </div>
    </main>
  );
}
