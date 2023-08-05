import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Work from "./pages/Work";
import SignModule from "./pages/Sign";
import LoginModule from "./pages/Login";
import TermsCon from "./pages/Term";
import PrivacyPolicy from "./pages/Privacy";

const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/pricing" element={<Pricing />} />
                <Route exact path="/howitworks" element={<Work />} />
                <Route exact path="/signup" element={<SignModule/>} />
                <Route exact path="/login" element={<LoginModule/>} />
                <Route exact path="/terms" element={<TermsCon/>} />
                <Route exact path="/privacypolicy" element={<PrivacyPolicy/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;