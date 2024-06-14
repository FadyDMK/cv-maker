import { useState } from "react";
/* eslint react/prop-types: 0 */

export function Education({ educations, setEducations }) {
  return (
    <div>
      <EducationUnit educations={educations} setEducations={setEducations} />
    </div>
  );
}

export function EducationUnit({ educations, setEducations }) {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false);

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
    setEducation({ ...education, location: e.target.value });
  }

  function handleEndDateChange(e) {
    setEducation({ ...education, endDate: e.target.value });
  }
  function resetEdu() {
    setEducation({
      degree: "",
      university: "",
      location: "",
      grade: "",
      startDate: "",
      endDate: "",
    });
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
    resetEdu();
  }

  function toggle() {
    setOpen(!open);
  }

  return (
    <div className="education">
      <div onClick={toggle} className="toggle">
        <h3>Education</h3>
      </div>
      {open && (
        <>
          <h1>University Name</h1>
          <input
            placeholder="University Name"
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
          <div className="btns">
            <button onClick={handleClick} className="add-btn">
              Add
            </button>
            <button onClick={resetEdu} className="reset-btn">Reset</button>
          </div>
        </>
      )}
    </div>
  );
}
