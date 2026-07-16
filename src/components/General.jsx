import { useState } from "react";

export default function General() {
  const [general, setGeneral] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    school: "",
    startDate: "",
    endDate: "",
    major: "",
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
        value={general.school}
        onChange={(e) => {
           setGeneral({
             ...general,
             school: e.target.value,
            });
        }}
        />
      </label>
      <label>
        Enrollment year:{" "}
        <input
        value={general.startDate}
        onChange={(e) => {
           setGeneral({
             ...general,
             startDate: e.target.value,
            });
        }}
        />
      </label>
      <label>
        Graduation year:{" "}
        <input
        value={general.endDate}
        onChange={(e) => {
           setGeneral({
             ...general,
             endDate: e.target.value,
            });
        }}
        />
      </label>
      <label>
        Major:{" "}
        <input
        value={general.major}
        onChange={(e) => {
           setGeneral({
             ...general,
             major: e.target.value,
            });
        }}
        />
      </label>
        {/*<button onClick={handleClick(general)}>Submit</button>*/}
      </form>
      <div className="previewDetails">
        <h1>Preview: </h1>
        <h2>General Information: </h2>
        <h3>{general.firstName}</h3>
        <h3>{general.lastName}</h3>
        <h3>{general.email}</h3>
        <h3>{general.phone}</h3>
        <h2>Education: </h2>
        <h3>{general.school}</h3>
        <h3>{general.startDate} to {general.endDate}</h3>
        <h3>{general.major}</h3>
      </div>
    </>
  );
}
