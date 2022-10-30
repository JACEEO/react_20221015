import { Route, Routes } from "react-router-dom";
import Detail from "./Detail";

function About() {
  return (
    <div>
      <h1>About</h1>

      <p>It's About component</p>
      <Routes>
        <Route path=":userId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default About;
