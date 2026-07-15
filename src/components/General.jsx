import { useState } from "react";

export default function General() {
  const [general, setGeneral] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
        {/*<button onClick={handleClick(general)}>Submit</button>*/}
      </form>
      <div className="previewDetails">
        <h3>{general.firstName}</h3>
        <h3>{general.lastName}</h3>
        <h3>{general.email}</h3>
        <h3>{general.phone}</h3>
      </div>
    </>
  );
}
