import General from "./General.jsx";

{
  /* Rework this to display the formatted and final resume */
}

export default function Resume() {
  return (
    <div id="resume">
      <h1>Resume</h1>
      <div id="details">
        <ResumeGeneral />
        <div id="experience"></div>
        <div id="education"></div>
      </div>
    </div>
  );
}
