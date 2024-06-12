import { exampleInfo } from "./example-info";
import { useState } from "react";

export function Work() {
  return (
    <div>
      <WorkUnit />
    </div>
  );
}

function WorkUnit() {
  const [open, setOpen] = useState(false);
  const [works, setWorks] = useState(exampleInfo.work);
  const [work, setWork] = useState({
    position: "Scientist and Inventor",
    company: "SpaceX",
    location: "Florida, US",
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
      },
    ];
    setWorks(newWorks);
    setWork({
      position: "Scientist and Inventor",
      company: "SpaceX",
      location: "Florida, US",
      startDate: "1/2024",
      endDate: "present",
    });
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

  return (
    <div className="work">
      <button onClick={toggle}>
        <h3>Work</h3>
      </button>
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

          <button onClick={handleClick}>Save</button>
        </>
      )}
    </div>
  );
}
