import { executives, directors, staff } from "./employees.js";

export const metadata = {
  title: "Our Team | Contact Us",
  description:
    "The OTSU is led by student executives and a board of directors who are elected annually, and supported by a team of full-time staff.",
};

export default async function OurTeamPage() {
  return (
    <main className="flex flex-col min-h-screen items-center w-full justify-center">
      <h1 className="text-2xl font-bold">Home Page</h1>
      <a href="/our-team" className="!text-blue-500 !text-2xl hover:underline">
        {metadata.title}
      </a>
    </main>
  );
}
