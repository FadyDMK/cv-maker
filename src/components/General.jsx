import { useState } from "react";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint react/prop-types: 0 */

export function General({ generalInfo, setGeneralInfo }) {
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(true);
  function handleNameChange(e) {
    console.log(generalInfo.fullName);
    setGeneralInfo({ ...generalInfo, fullName: e.target.value });
  }
  function handleEmailChange(e) {
    setGeneralInfo({ ...generalInfo, email: e.target.value });
  }
  function handleNumberChange(e) {
    setGeneralInfo({ ...generalInfo, phoneNumber: e.target.value });
  }
  function handleLocationChange(e) {
    setGeneralInfo({ ...generalInfo, location: e.target.value });
  }
  function toggle() {
    setOpen(!open);
  }
  function resetGen() {
    setGeneralInfo({
      fullName: "",
      email: "",
      phoneNumber: "",
      location: "",
    });
  }

  return (
    <>
      <div className="personalInfo">
        <div onClick={toggle} className="toggle">
          <div className="title-arrow">
            <h3>General Information</h3>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`arrow ${open ? "rotated" : "unrotated"}`}
            />
          </div>
        </div>
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
            <h1>Location</h1>
            <input
              placeholder="Location"
              value={generalInfo.location}
              onChange={handleLocationChange}
            />
            <button onClick={resetGen} className="reset-btn">
              Reset
            </button>
          </>
        )}
      </div>
    </>
  );
}
