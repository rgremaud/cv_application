import { useState } from "react";
import ResumeGeneral from "./GeneralResume"

export default function General() {
  const [general, setGeneral] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  function handleClick(props) {
    // rework this to create a new component with props that displays under Resume 
    const generalInfo = ResumeGeneral(props);
  }

  return (
    <>
      <h2>General Information:</h2>
      <label>
        First name:{' '}
        <input
          value={general.firstName}
          onChange={
            e => {
            setGeneral({
              ...general,
              firstName: e.target.value
            });
          }
        }
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={general.lastName}
          onChange={
            e => {
            setGeneral({
              ...general,
              lastName: e.target.value
            });
          }
          }
        />
      </label>
      <label>
        Email:{' '}
        <input
          value={general.email}
          onChange={
            e => {
            setGeneral({
              ...general,
              email: e.target.value
            });
          }
          }
        />
      </label>
      <label>
        Phone Number:{' '}
        <input
          value={general.phone}
          onChange={
            e => {
            setGeneral({
              ...general,
              phone: e.target.value
            });
          }
          }
        />
      </label>
    <button onClick={handleClick(general)}>Submit</button>
    </>
 );
}
