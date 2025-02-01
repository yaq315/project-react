import React from "react";
import "./Team.css";
import img1 from "../image/imgteam1.webp"
import img2 from "../image/imgteam2.webp"
import img3 from "../image/team3.jpg"
import img4 from "../image/imgteam4.jpg"
import img5 from "../image/temimg5.jpg"
import img6 from "../image/teamimg6.jpg"
const teamMembers = [
  { name: "Mohammed Al-Omari", role: "Director", img: img1},
  { name: "Ahmed Aweis", role: "Deputy Director", img: img2 },
  { name: "Yaqoot Al-Ghraibeh", role: "Teacher", img: img3},
  { name: "Saba Atiya", role: "Teacher", img: img4},
  { name: "Enas Abu Nassar", role: "Teacher", img: img5 },
  { name: "Sedra Wael", role: "Teacher", img: img6 },
];

const TeamSection = () => {
  return (
    <div className="team-section">
      <h2> Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-item">
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
