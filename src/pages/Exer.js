import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";

function Exer() {
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
        <div>
          <div style={{ position: "relative", textAlign: "center" }}>
            <h1
              className=""
              style={{
                paddingTop: "50px",
                fontWeight: "bold",
                marginBottom: "40px",
                position: "relative",
              }}
            >
              Exercise Routine
            </h1>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                bottom: "-15px", // Adjust this value to control the distance between the text and the underline
                left: "50%", // Use "50%" to position the underline at the horizontal center of the title
                transform: "translateX(-50%)", // Adjust the transform to center the underline properly
                width: "200px", // Adjust this value to control the width of the underline
                height: "8px", // Adjust this value to control the thickness of the underline
                backgroundColor: "#9dcd5a",
                borderRadius: "05px",
                borderBottom: "50px",
              }}
            ></span>
          </div>
        </div>
        <div>
          <p>
            Is your exercise regimen in need of rejuvenation? Look no further
            than HomeoDesk, your virtual hub of wellness expertise, dedicated to
            reinvigorating your fitness routines with a fresh perspective.
            Whether you find your workouts as engaging as counting sheep or as
            uninspiring as a sedate waltz, we are here to transform your fitness
            journey.
          </p>
          <p>
            Why settle for monotony when your fitness routine can be a
            masterpiece? Our team of seasoned fitness experts excels in crafting
            regimens that align harmoniously with your body's natural rhythm.
            Drawing inspiration from the balance of nature, we address
            challenges such as waning motivation or frustrating plateaus. Your
            fitness hurdles become stepping stones toward comprehensive
            solutions.
          </p>
          <p>
            Envision entering a digital realm where fitness plateaus cease to
            exist. HomeoDesk's online fitness center serves as your gateway to
            an enriched workout experience. Share your fitness aspirations with
            our empathetic professionals, equipped with both ancient wisdom and
            contemporary insights. Through virtual consultations, we
            meticulously design a personalized plan tailored to your body's
            unique requirements, recognizing that every step should resonate
            with your individuality.
          </p>
          <p>
            At HomeoDesk, we celebrate your evolving fitness journey – the
            steps, stretches, and sweat that define your progress. We believe
            that wellness is an evolving dance that rejuvenates both body and
            spirit. Embark on a transformative movement journey with us, turning
            mundane workouts into dynamic experiences that elevate your
            vitality.
          </p>
          <Link to="/signup">
            <MDBBtn
              style={{
                backgroundColor: "#4F2D92",
                alignSelf: "center",
                width: "150px",
              }}
              href="#"
            >
              Consult Now
            </MDBBtn>
          </Link>
        </div>
      </Container>{" "}
      <Footer />
    </>
  );
}

export default Exer;
