import { useState } from "react";

export default function Education() {
  /*
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  */
  return (
    <>
      <h2>Education:</h2>
      <p>Please enter your highest level schooling that you have completed</p>
      <label>
        School Name:{" "}
        <input
        //value={email}
        />
      </label>
      <label>
        Enrollment year:{" "}
        <input
        //value={email}
        />
      </label>
      <label>
        Graduation year:{" "}
        <input
        //value={email}
        />
      </label>
      <label>
        Field of study (if applicable):{" "}
        <input
        //value={email}
        />
      </label>
    </>
  );
}
