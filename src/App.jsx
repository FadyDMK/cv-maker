import { Education } from "./components/Education";
import { General } from "./components/General";
import { Work } from "./components/Work";

export default function App() {
  return (
    <div className="wrapper">
      <General />
      <Education />
      <Work/>
    </div>
  );
}
