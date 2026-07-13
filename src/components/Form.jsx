import { useState } from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

export default function Form() {

  return (
    <div id="formInputs"> 
      <h1>Lets build your resume!</h1>
      <General />
      <Education />
      <Experience />
    </div>
 );
}
