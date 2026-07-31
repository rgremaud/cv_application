import Phone from "./phone.svg";
import Mail from "./mail.svg";

export default function Resume({color, general, skills, education, experience }) {
  return (
    <div className="finalResume">
      <div className="header">
        {color}
        {general.firstName} {general.lastName}
      </div>
      <div className="sidebar">
        <div className="sidebarLine">
          <img src={Mail} alt="Email" className="resImg" />
          {general.email}
        </div>
        <div className="sidebarLine">
          <img src={Phone} alt="Phone" className="resImg" />
          {general.phone}
        </div>
        <div className="educationFinal">
          <h3 className="resTitle">Education</h3>
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
        <h3 className="resTitle">Skills</h3>
        {skills.map((skill) => (
          <div key={skill.id}>{skill.skill}</div>
        ))}
      </div>
      <div className="experienceFinal">
        <h1>Experience</h1>
        {experience.map((entry) => (
          <div key={entry.id}>
            <h2>
              {entry.employer} 
            </h2>
            <div>{entry.wstart} to {entry.wend}</div> 
            <p>• {entry.bulletOne}</p>
            <p>• {entry.bulletTwo}</p>
            <p>• {entry.bulletThree}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
