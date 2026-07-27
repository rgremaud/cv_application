export default function Resume({ general, skills, education, experience }) {
  return (
    <div className="finalResume">
      <div className="details">
        <div>
          <h3>{general.firstName}</h3>
          <h3>{general.lastName}</h3>
        </div>
        <div>
          <h3>{general.email}</h3>
          <h3>{general.phone}</h3>
        </div>
      </div>
      <div className="skills">
        <div className="details">
          {skills.map((skill) => (
            <h3 key={skill.id}>{skill.skill}</h3>
          ))}
        </div>
      </div>
      <div className="educationPreview">
        <h2>Education: </h2>
        <div className="details">
          {education.map((entry) => (
            <div key={entry.id}>
              <h2>
                {entry.school} - {entry.start} to {entry.end}
              </h2>
              <p>{entry.major}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="experiencePreview">
        <h2>Experience: </h2>
        <div className="details">
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
    </div>
  );
}
