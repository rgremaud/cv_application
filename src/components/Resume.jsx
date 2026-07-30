import Phone from "./phone.svg";
import Mail from "./mail.svg";

export default function Resume({ general, skills, education, experience }) {
  return (
    <div className="finalResume">
      <div className="header">
        {general.firstName} {general.lastName}
      </div>
      <div className="sidebar">
        <div className="sidebarLine">
          <img src={Mail} alt="Email" />
          {general.email}
        </div>
        <div className="sidebarLine">
          <img src={Phone} alt="Phone" />
          {general.phone}
        </div>
        <div className="educationFinal">
          <h3>Education</h3>
          {education.map((entry) => (
            <div key={entry.id}>
              <div> {entry.school} </div>
              <div>
                {" "}
                {entry.start} to {entry.end}{" "}
              </div>
              <p>{entry.major}</p>
            </div>
          ))}
        </div>
        <h3>Skills</h3>
        {skills.map((skill) => (
          <div key={skill.id}>{skill.skill}</div>
        ))}
      </div>
      <div className="experienceFinal">
        <h1>Experience</h1>
        {experience.map((entry) => (
          <div key={entry.id}>
            <h2>
              {entry.employer} - {entry.wstart} to {entry.wend}{" "}
            </h2>
            <p>• {entry.bulletOne}</p>
            <p>• {entry.bulletTwo}</p>
            <p>• {entry.bulletThree}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
