import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Guidelines from "./Components/Guidelines";
import About from "./Components/About";
import Speakers from "./Components/Speakers";
import Committee from "./Components/Committee";
import CallForPapers from "./Components/CallForPapers";
import Register from "./Components/Register";
import Contact from "./Components/Contact";
import AdvisoryBoard from "./Components/AdvisoryBoard";
import TechnicalProgram from "./Components/TechnicalProgram ";
import OrganizingComittee from "./Components/OrganizingComittee ";
import Direct from "./Components/Direct";
import Schedule from "./Components/Schedule";
import CmtAcknowledgement from "./Components/Cmt";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/schedule" element={<Schedule />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/guidelines" element={<Guidelines />}></Route>
        <Route path="/speakers" element={<Speakers />}></Route>
        <Route path="/committee" element={<Committee />}></Route>
        <Route path="/call-for-papers" element={<CallForPapers />}></Route>
        <Route
          path="/cmt-acknowledgement"
          element={<CmtAcknowledgement />}
        ></Route>
        <Route
          path="/committee/advisory-board"
          element={<AdvisoryBoard />}
        ></Route>

        <Route
          path="/committee/technical-program-committee"
          element={<TechnicalProgram />}
        ></Route>
        <Route
          path="/committee/organizing-committee"
          element={<OrganizingComittee />}
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/extra" element={<Direct />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};
export default App;
