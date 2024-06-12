import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faFileSignature} />
      <h3 >CV Maker</h3>
    </div>
  );
}
