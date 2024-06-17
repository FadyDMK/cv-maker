import { useState } from "react";
import { faChevronUp, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
/* eslint react/prop-types: 0 */

export function Work({ works, setWorks }) {
  return (
    <div>
      <WorkUnit works={works} setWorks={setWorks} />
    </div>
  );
}

function WorkUnit({ works, setWorks }) {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(true);
  const [previewClass, setPreviewClass] = useState("visible");
  const [editClass, setEditClass] = useState("invisible");

  const [work, setWork] = useState({
    position: "",
    company: "",
    location: "",
    description:"",
    startDate: "",
    endDate: "",
    id: "2",
  });

  function toggle() {
    setOpen(!open);
  }

  function handleClick() {
    if (edit) {
      const newWork = works.filter((element) => element.id != work.id);
      const newWorks = [
        ...newWork,
        {
          position: work.position,
          company: work.company,
          location: work.location,
          startDate: work.startDate,
          endDate: work.endDate,
          description: work.description,
          id: work.id,
        },
      ];
      setWorks(newWorks);
    } else {
      const newWorks = [
        ...works,
        {
          position: work.position,
          company: work.company,
          location: work.location,
          startDate: work.startDate,
          endDate: work.endDate,
          description: work.description,
          id: uuidv4(),
        },
      ];
      setWorks(newWorks);
    }
    setPreviewClass("visible");
    setEditClass("invisible");
  }

  function handlePositionChange(e) {
    setWork({ ...work, position: e.target.value });
  }
  function handleCompanyChange(e) {
    setWork({ ...work, company: e.target.value });
  }
  function handleLocationChange(e) {
    setWork({ ...work, location: e.target.value });
  }
  function handleStartDateChange(e) {
    setWork({ ...work, startDate: e.target.value });
  }
  function handleEndDateChange(e) {
    setWork({ ...work, endDate: e.target.value });
  }
  function handleDescriptionChange(e) {
    setWork({ ...work, description: e.target.value });
  }
  function resetWork() {
    setWork({
      position: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
      id: "",
    });
  }
  function handleCancel() {
    setPreviewClass("visible");
    setEditClass("invisible");
  }
  function handleDelete(id) {
    setWorks(works.filter((element) => element.id != id));
  }
  function handleEdit(id) {
    setEdit(true);
    const w = works.find((element) => element.id == id);
    setWork(w);
    setPreviewClass("invisible");
    setEditClass("visible");
  }
  function handleNew() {
    resetWork();
    setEdit(false);
    setPreviewClass("invisible");
    setEditClass("visible");
  }

  return (
    <div className="work">
      <div onClick={toggle} className="toggle">
        <div className="title-arrow">
          <h3>Work</h3>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`arrow ${open ? "rotated" : "unrotated"}`}
          />
        </div>
      </div>
      {open && (
        <>
          <WorkPreview />
          <div className={editClass}>
            <h1>Position Name</h1>
            <input
              placeholder="Position"
              value={work.position}
              onChange={handlePositionChange}
            />
            <h1>Company Name</h1>
            <input
              placeholder="Company"
              value={work.company}
              onChange={handleCompanyChange}
            />
            <h1>Job Description</h1>
            <textarea
              placeholder="description"
              value={work.description}
              onChange={handleDescriptionChange}
              className="description-area"
            />
            <h1>Location</h1>
            <input
              placeholder="Location"
              value={work.location}
              onChange={handleLocationChange}
            />
            <h1>Start Date</h1>
            <input
              placeholder="Start Date"
              value={work.startDate}
              onChange={handleStartDateChange}
            />
            <h1>End Date</h1>
            <input
              placeholder="End Date"
              value={work.endDate}
              onChange={handleEndDateChange}
            />
            <div className="btns">
              <button onClick={handleClick} className="add-btn">
                {edit ? "Edit" : "Add"}
              </button>
              <button onClick={handleCancel} className="cancel-btn">
                Cancel
              </button>
              <button onClick={resetWork} className="reset-btn">
                Reset
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
  function WorkPreview() {
    return (
      <div className={previewClass}>
        {works.map((element) => (
          <div key={element.id} className="education-element">
            <h1>{element.company}</h1>
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
          New Work
        </button>
      </div>
    );
  }
}
