import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Preview({generalInfo}) {
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
    </div>
  );
}
