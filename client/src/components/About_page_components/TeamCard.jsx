import React from "react";
import teamMembers from "./teamData";
function TeamCard() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto mb-4 rounded-full"
            />
            <h2 className="text-xl font-bold mb-2">{member.name}</h2>
            <p className="text-gray-700 mb-4">{member.position}</p>
            <p className="text-gray-600">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamCard;
