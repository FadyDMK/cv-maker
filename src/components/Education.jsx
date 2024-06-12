import { exampleInfo } from "./example-info";
import { useState } from "react";

export function Education() {
  return (
    <div>
      <EducationUnit />
    </div>
  );
}

export function EducationUnit() {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false);
  const [educations, setEducations] = useState(exampleInfo.education);
  const [education, setEducation] = useState({
    degree: "Bachelor in Physics",
    university: "Gluglug Intergalactic University",
    location: "Andromeda Galaxy",
    grade: "3.99/4",
    startDate: "5/2010",
    endDate: "6/2012",
  });

  function handleUniNameChange(e) {
    setEducation({ ...education, university: e.target.value });
  }
  function handleDegreeChange(e) {
    setEducation({ ...education, degree: e.target.value });
  }
  function handleGradeChange(e) {
    setEducation({ ...education, grade: e.target.value });
  }
  function handleStartDateChange(e) {
    setEducation({ ...education, startDate: e.target.value });
  }
  function handleLocationChange(e) {
    setEducation({ ...education, startDate: e.target.value });
  }

  function handleEndDateChange(e) {
    setEducation({ ...education, endDate: e.target.value });
  }
  function handleClick() {
    const newEducations = [
      ...educations,
      {
        degree: education.degree,
        university: education.university,
        location: education.location,
        grade: education.grade,
        startDate: education.startDate,
        endDate: education.endDate,
      },
    ];

    setEducations(newEducations);
    setEducation({
      degree: "Bachelor in Physics",
      university: "Gluglug Intergalactic University",
      location: "Andromeda Galaxy",
      grade: "3.99/4",
      startDate: "5/2010",
      endDate: "6/2012",
    });
  }
  function toggle() {
    setOpen(!open);
  }

  return (
    <div className="education">
      <button onClick={toggle}>
        <h3>Education</h3>
      </button>
      {open && (
        <>
          <h1>University Name</h1>
          <input
            placeholder="university Name"
            value={education.university}
            onChange={handleUniNameChange}
          />
          <h1>Degree</h1>
          <input
            placeholder="Degree Name"
            value={education.degree}
            onChange={handleDegreeChange}
          />
          <h1>Location</h1>
          <input
            placeholder="Location"
            value={education.location}
            onChange={handleLocationChange}
          />
          <h1>Grade</h1>
          <input
            placeholder="Grade"
            value={education.grade}
            onChange={handleGradeChange}
          />
          <h1>Start Date</h1>
          <input
            placeholder="Start Date"
            value={education.startDate}
            onChange={handleStartDateChange}
          />
          <h1>End Date</h1>
          <input
            placeholder="End Date"
            value={education.endDate}
            onChange={handleEndDateChange}
          />

          <button onClick={handleClick}>Save</button>
        </>
      )}
    </div>
  );
}
