import { useState } from "react";

export default function General() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleClick() {
    alert(fullName);
  }

  return (
    <>
      <h2>General Information:</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:{' '}
        <input
          value={email}
        />
      </label>
      <label>
        Phone Number:{' '}
        <input
          value={phone}
        />
      </label>
    <button onClick={handleClick}>Submit</button>
    </>
 );
}
