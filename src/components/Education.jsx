import { useState } from "react";
import { faChevronUp, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
/* eslint react/prop-types: 0 */

export function Education({ educations, setEducations }) {
  return (
    <div>
      <EducationUnit educations={educations} setEducations={setEducations} />
    </div>
  );
}

function EducationUnit({ educations, setEducations }) {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(true);
  const [previewClass, setPreviewClass] = useState("visible");
  const [editClass, setEditClass] = useState("invisible");

  const [education, setEducation] = useState({
    degree: "Bachelor in Physics",
    university: "Gluglug Intergalactic University",
    location: "Andromeda Galaxy",
    grade: "3.99/4",
    startDate: "5/2010",
    endDate: "6/2012",
  });


  function handleEdit(id) {
    setEdit(true);
    const edu = educations.find((element) => element.id == id);
    setEducation(edu);
    setPreviewClass("invisible");
    setEditClass("visible");
  }
  function handleDelete(id) {
    setEducations(educations.filter((element) => element.id != id));
  }
  function EducationPreview() {
    return (
      <div className={previewClass}>
        {educations.map((element) => (
          <div key={element.id} className="education-element">
            <h1>{element.university}</h1>
            <div className="icons-edu">
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => {
                  handleDelete(element.id);
                }}
                className="icon"
              />
              <FontAwesomeIcon
                icon={faPen}
                onClick={() => {
                  handleEdit(element.id);
                }}
                className="icon"
              />
            </div>
          </div>
        ))}
        <button className="add-new" onClick={handleNew}>
          New Education
        </button>
      </div>
    );
  }
  function handleNew() {
    resetEdu();
    setEdit(false);
    setPreviewClass("invisible");
    setEditClass("visible");
  }
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

  function handleCancel() {
    setPreviewClass("visible");
    setEditClass("invisible");
  }
  function handleClick() {
    if (edit) {
      const newEdu = educations.filter((element) => element.id != education.id);
      const newEducations = [
        ...newEdu,
        {
          degree: education.degree,
          university: education.university,
          location: education.location,
          grade: education.grade,
          startDate: education.startDate,
          endDate: education.endDate,
          id: education.id,
        },
      ];
      setEducations(newEducations);
    } else {
      const newEducations = [
        ...educations,
        {
          degree: education.degree,
          university: education.university,
          location: education.location,
          grade: education.grade,
          startDate: education.startDate,
          endDate: education.endDate,
          id: uuidv4(),
        },
      ];
      setEducations(newEducations);
    }
    setPreviewClass("visible");
    setEditClass("invisible");
  }

  function toggle() {
    setOpen(!open);
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

  return (
    <div className="education">
      <div onClick={toggle} className="toggle">
        <div className="title-arrow">
          <h3>Education</h3>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`arrow ${open ? "rotated" : "unrotated"}`}
          />
        </div>
      </div>
      {open && (
        <>
          <EducationPreview educations={educations} />
          <div className={editClass}>
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
                {edit ? "Edit" : "Add"}
              </button>
              <button onClick={handleCancel} className="cancel-btn">
                Cancel
              </button>
              <button onClick={resetEdu} className="reset-btn">
                Reset
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
