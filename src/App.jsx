import { useState } from "react";
import { Education } from "./components/Education";
import { General } from "./components/General";
import { Preview } from "./components/Preview";
import { Work } from "./components/Work";
import { exampleInfo } from "./components/example-info";

export default function App() {
  const [educations, setEducations] = useState(exampleInfo.education);
  const [general,setGeneral] = useState(exampleInfo.personalInfo);
  return (
    <div className="container">
      <div className="wrapper">
        <General generalInfo={general} setGeneralInfo={setGeneral}/>
        <Education educations={educations} setEducations={setEducations}/>
        <Work />
      </div>
      <Preview generalInfo={general} educations={educations}/>
    </div>
  );
}
