import { useState } from "react";

export default function Form() {
  const [general, setGeneral] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [school, setSchool] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [major, setMajor] = useState("");
  const [education, setEducation] = useState([]);

  const [employer, setEmployer] = useState("");
  const [wstart, setWstart] = useState("");
  const [wend, setWend] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState([]);

  return (
    <>
      <form>
        <h2>General Information:</h2>
        <label>
          First name:{" "}
          <input
            value={general.firstName}
            onChange={(e) => {
              setGeneral({
                ...general,
                firstName: e.target.value,
              });
            }}
          />
        </label>
        <label>
          Last name:{" "}
          <input
            value={general.lastName}
            onChange={(e) => {
              setGeneral({
                ...general,
                lastName: e.target.value,
              });
            }}
          />
        </label>
        <label>
          Email:{" "}
          <input
            value={general.email}
            onChange={(e) => {
              setGeneral({
                ...general,
                email: e.target.value,
              });
            }}
          />
        </label>
        <label>
          Phone Number:{" "}
          <input
            value={general.phone}
            onChange={(e) => {
              setGeneral({
                ...general,
                phone: e.target.value,
              });
            }}
          />
        </label>
        <h2>Education:</h2>
        <p>Please enter your highest level schooling that you have completed</p>
        <label>
          School Name:{" "}
          <input value={school} onChange={(e) => setSchool(e.target.value)} />
        </label>
        <label>
          Enrollment year:{" "}
          <input value={start} onChange={(e) => setStart(e.target.value)} />
        </label>
        <label>
          Graduation year:{" "}
          <input value={end} onChange={(e) => setEnd(e.target.value)} />
        </label>
        <label>
          Major:{" "}
          <input value={major} onChange={(e) => setMajor(e.target.value)} />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            setEducation([
              ...education,
              {
                id: crypto.randomUUID(),
                school: school,
                start: start,
                end: end,
                major: major,
              },
            ]);
          }}
        >
          Add
        </button>
        <h2>Work Experience:</h2>
        <label>
          Employer:{" "}
          <input
            value={employer}
            onChange={(e) => setEmployer(e.target.value)}
          />
        </label>
        <label>
          Start Date:{" "}
          <input value={wstart} onChange={(e) => setWstart(e.target.value)} />
        </label>
        <label>
          End Date:{" "}
          <input value={wend} onChange={(e) => setWend(e.target.value)} />
        </label>
        <label>
          Description:{" "}
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            setExperience([
              ...experience,
              {
                id: crypto.randomUUID(),
                employer: employer,
                wstart: wstart,
                wend: wend,
                description: description,
              },
            ]);
          }}
        >
          Add
        </button>
      </form>
      <div className="previewDetails">
        <h1>Preview: </h1>
        <h2>General Information: </h2>
        <h3>{general.firstName}</h3>
        <h3>{general.lastName}</h3>
        <h3>{general.email}</h3>
        <h3>{general.phone}</h3>
        <h2>Education: </h2>
        {education.map((entry) => (
          <div key={entry.id}>
            <h2>{entry.school}</h2>
            <p>
              {entry.start} to {entry.end}
            </p>
            <p>{entry.major}</p>
          </div>
        ))}
        <h2>Experience: </h2>
        {experience.map((entry) => (
          <div key={entry.id}>
            <h2>{entry.employer}</h2>
            <p>
              {entry.wstart} to {entry.wend}
            </p>
            <p>{entry.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
