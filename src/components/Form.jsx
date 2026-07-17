import { useState } from "react";

export default function Form() {
  const [general, setGeneral] = useState({
    firstName: "", lastName: "", email: "", phone: "" 
  })

  const [education, setEducation] = useState({
     school: "", startDate: "", endDate: "", major: "" 
  })

  const [experience, setExperience] = useState({
     employer: "", startDate: "", endDate: "", description: "" 
  });

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
          <input
            value={education.school}
            onChange={(e) => {
              setEducation({
                ...education,
                school: e.target.value,
              });
            }}
          />
        </label>
        <label>
          Enrollment year:{" "}
          <input
            value={education.startDate}
            onChange={(e) => {
              setEducation({
                ...education,
                startDate: e.target.value,
              });
            }}
          />
        </label>
        <label>
          Graduation year:{" "}
          <input
            value={education.endDate}
            onChange={(e) => {
              setEducation({
                ...education,
                endDate: e.target.value,
              });
            }}
          />
        </label>
        <label>
          Major:{" "}
          <input
            value={education.major}
            onChange={(e) => {
              setEducation({
                ...education,
                major: e.target.value,
              });
            }}
          />
        </label>
        <h2>Work Experience:</h2>
        <label>
          Employer:{" "}
          <input
            value={experience.employer}
            onChange={(e) => {
              setExperience({
                ...experience,
                employer: e.target.value,
              });
            }}
          />
        </label>
        <label>
          Start Date:{" "}
          <input
            value={experience.startDate}
            onChange={(e) => {
              setExperience({
                ...experience,
                startDate: e.target.value,
              });
            }}
          />
        </label>
        <label>
          End Date:{" "}
          <input
            value={experience.endDate}
            onChange={(e) => {
              setExperience({
                ...experience,
                endDate: e.target.value,
              });
            }}
          />
        </label>
        <label>
          Description:{" "}
          <input
            value={experience.description}
            onChange={(e) => {
              setExperience({
                ...experience,
                description: e.target.value,
              });
            }}
          />
        </label>
        <button>Add Employer</button>
      </form>
      <div className="previewDetails">
        <h1>Preview: </h1>
        <h2>General Information: </h2>
        <h3>{general.firstName}</h3>
        <h3>{general.lastName}</h3>
        <h3>{general.email}</h3>
        <h3>{general.phone}</h3>
        <h2>Education: </h2>
        <h3>{education.school}</h3>
        <h3>
          {education.startDate} to {education.endDate}
        </h3>
        <h3>{education.major}</h3>
        <h2>Experience: </h2>
        <h3>{experience.employer}</h3>
        <h3>
          {experience.startDate} to {experience.endDate}
        </h3>
        <h3>{experience.description}</h3>
      </div>
    </>
  );
}
