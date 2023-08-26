import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Work from "./pages/Work";
import SignModule from "./pages/Sign";
import LoginModule from "./pages/Login";
import TermsCon from "./pages/Term";
import PrivacyPolicy from "./pages/Privacy";
import Career from "./pages/Career";
import Student from "./pages/Student";
import Musculoskeletal from "./pages/Musculoskeletal";
import Scroll from "./components/Scroll";
import Hair from "./pages/Hair";
import Gastro from "./pages/Gastro";
import Mental from "./pages/Mental";
import Skin from "./pages/Skin";
import Sugar from "./pages/Sugar";
import Coun from "./pages/Coun";
import Weight from "./pages/Weight";
import Exer from "./pages/Exer";
import Arth from "./pages/Arth";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/howitworks" element={<Work />} />
        <Route exact path="/signup" element={<SignModule />} />
        <Route exact path="/login" element={<LoginModule />} />
        <Route exact path="/terms" element={<TermsCon />} />
        <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route exact path="/career" element={<Career />} />
        <Route exact path="/studentcorner" element={<Student />} />
        <Route exact path="/musculoskeletal" element={<Musculoskeletal />} />
        <Route exact path="/hair" element={<Hair />} />
        <Route exact path="/gastro" element={<Gastro />} />
        <Route exact path="/mental" element={<Mental />} />
        <Route exact path="/skin" element={<Skin />} />
        <Route exact path="/sugar" element={<Sugar />} />
        <Route exact path="/coun" element={<Coun />} />
        <Route exact path="/weight" element={<Weight />} />
        <Route exact path="/exer" element={<Exer />} />
        <Route exact path="/arthiritis" element={<Arth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
