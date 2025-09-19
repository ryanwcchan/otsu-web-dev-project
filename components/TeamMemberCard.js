import React from "react";
import Image from "next/image";

export default function TeamMemberCard({ member }) {
  return (
    <div
      key={member.name}
      className="text-center flex flex-col items-center gap-1 hover:translate-y-[-2px] transition-all duration-200 ease-in-out 
        hover:shadow-gray-800/50 hover:bg-gray-50 rounded-lg sm:p-2 md:p-4 hover:scale-110"
    >
      <Image
        src={member.image}
        alt={member.name}
        width={160} // w-40 = 10rem = 160px
        height={160}
        className={
          member.image
            ? `w-40 h-40 object-cover rounded-full mx-auto mb-4 shadow-xl`
            : `w-40 h-40 object-cover mx-auto mb-4 shadow-xl`
        }
      />
      <h3 className="text-xl font-medium">{member.name}</h3>
      <p className="text-gray-600">{member.title}</p>
    </div>
  );
}
