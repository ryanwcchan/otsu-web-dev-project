import React from "react";
import TeamMemberCard from "./TeamMemberCard";

export default function TeamSection({ title, members }) {
  return (
    <section className="w-full max-w-6xl mb-16">
      <h2 className="text-3xl font-semibold !my-8 !text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 overflow-visible">
        {members.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
