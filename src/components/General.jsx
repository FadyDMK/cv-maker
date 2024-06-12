import { useState } from "react";
import { exampleInfo } from "./example-info";

export function General() {
  // eslint-disable-next-line no-unused-vars
  const [generalInfo, setGeneralInfo] = useState(exampleInfo.personalInfo);
  const [open, setOpen] = useState(true);
  function handleNameChange(e) {
    setGeneralInfo({ ...generalInfo, fullName: e.target.value });
  }
  function handleEmailChange(e) {
    setGeneralInfo({ ...generalInfo, email: e.target.value });
  }
  function handleNumberChange(e) {
    setGeneralInfo({ ...generalInfo, email: e.target.value });
  }
  function toggle(){
    setOpen(!open);
  }

  return (
    <div className="personalInfo">
      <button onClick={toggle}>
        <h3>General Information</h3>
      </button>
      {open && (
      <>
        <h1>Full Name</h1>
        <input
          placeholder="Full Name"
          value={generalInfo.fullName}
          onChange={handleNameChange}
        />
        <h1>Email</h1>
        <input
          placeholder="Email"
          value={generalInfo.email}
          onChange={handleEmailChange}
        />
        <h1>Phone Number</h1>
        <input
          placeholder="Phone Number"
          value={generalInfo.phoneNumber}
          onChange={handleNumberChange}
        />
      </>)}
    </div>
  );
}
