import { useState } from "react";
/* eslint react/prop-types: 0 */

export function Work({works, setWorks}) {
  return (
    <div>
      <WorkUnit works={works} setWorks={setWorks}/>
    </div>
  );
}

function WorkUnit({works, setWorks}) {
  const [open, setOpen] = useState(false);
  
  const [work, setWork] = useState({
    position: "Scientist and Inventor",
    company: "SpaceX",
    location: "Florida, US",
    description: "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
    startDate: "1/2024",
    endDate: "present",
  });

  function toggle() {
    setOpen(!open);
  }

  function handleClick() {
    const newWorks = [
      ...works,
      {
        position: work.position,
        company: work.company,
        location: work.location,
        startDate: work.startDate,
        endDate: work.endDate,
        description: work.description,
      },
    ];
    setWorks(newWorks);
    resetWork();
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
  function resetWork(){
    setWork({
      position: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  }

  return (
    <div className="work">
      <div onClick={toggle} className="toggle">
        <h3>Work</h3>
      </div>
      {open && (
        <>
          <h1>Position Name</h1>
          <input
            placeholder="university Name"
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
          <button onClick={handleClick} className="add-btn">Add</button>
          <button onClick={resetWork} className="reset-btn">Reset</button>
          </div>
        </>
      )}
    </div>
  );
}
