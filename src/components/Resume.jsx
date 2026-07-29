import Phone from "./phone.svg";
import Mail from "./mail.svg";

export default function Resume({ general, skills, education, experience }) {
  return (
    <div className="finalResume">
      <div className="header">
          {general.firstName} {general.lastName}
      </div>
      <div className="sidebar">
          <div>
            <img src={Mail} alt="Email" />
            {general.email}
          </div>
          <div>
            <img src={Phone} alt="Phone" />
            {general.phone}
          </div>
          {skills.map((skill) => (
            <div key={skill.id}>{skill.skill}</div>
          ))}
      </div>
      <div className="educationFinal">
          {education.map((entry) => (
            <div key={entry.id}>
              <h2>
                {entry.school} - {entry.start} to {entry.end}
              </h2>
              <p>{entry.major}</p>
            </div>
          ))}
      </div>
      <div className="experienceFinal">
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
