import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* eslint react/prop-types: 0 */

export function Preview({ generalInfo, educations , works}) {
  function EducationPreviewUnit() {
    return (
      <div className="uni-info">
        {educations.map((element) => (
          <>
            <div className="uni-info-unit">
              <div className="location-date">
                <div className="date">
                  {element.startDate} - {element.endDate}
                </div>

                <div className="location">{element.location}</div>
              </div>
              <div className="uni-degree">
                <div className="uni">{element.university}</div>
                <div className="degree">{element.degree}</div>
                <div className="grade">{element.grade}</div>
              </div>
            </div>
          </>
        ))}
      </div>
    );
  }
  function WorkPreviewUnit() {
    return (
      <div className="work-info">
        {works.map((element) => (
          <>
            <div className="uni-info-unit">
              <div className="location-date">
                <div className="date">
                  {element.startDate} - {element.endDate}
                </div>

                <div className="location">{element.location}</div>
              </div>
              <div className="uni-degree">
                <div className="uni">{element.position}</div>
                <div className="degree">{element.company}</div>
                <div className="grade">{element.description}</div>
              </div>
            </div>
          </>
        ))}
      </div>
    );

  }
  return (
    <div className="preview">
      <div className="cv-header">
        <h2>{generalInfo.fullName}</h2>
        <div className="info">
          <div className="email">
            <FontAwesomeIcon icon={faEnvelope} />
            {generalInfo.email}
          </div>
          <div className="phone">
            <FontAwesomeIcon icon={faPhone} />
            {generalInfo.phoneNumber}
          </div>
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} />
            {generalInfo.location}
          </div>
        </div>
      </div>
      <div className="education-preview">
        <div className="education-header">Education</div>
        <EducationPreviewUnit />
      </div>
      <div className="work-preview">
        <div className="work-header">Work Experience</div>
        <WorkPreviewUnit />
      </div>
    </div>
  );
}
