import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";

function Sugar() {
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
              Diabetics
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
            Are your blood sugar levels causing a symphony of unpredictability?
            Look no further than HomeoDesk, your virtual haven for diabetic
            care, dedicated to helping you achieve a harmonious melody of
            wellness. Whether your glucose readings resemble a rollercoaster or
            meal planning feels like navigating a labyrinth, we are here to
            guide you toward diabetic harmony.
          </p>
          <p>
            Why accept imbalance when your diabetic journey can be a harmonious
            blend of well-being? Our team of diabetic wellness experts excels in
            crafting plans that align with your body's unique needs. Drawing
            from the wisdom of nature, we address challenges like unexpected
            glucose spikes or the intricacies of medication management. Your
            diabetic puzzles are musical notes waiting to be harmonized.
          </p>
          <p>
            Imagine entering a digital sanctuary where blood sugar fluctuations
            find equilibrium. HomeoDesk's online diabetic care center opens the
            door to balanced living. Share your diabetic story with our
            empathetic professionals, armed with ancient insights and modern
            knowledge. Through virtual consultations, we assist you in creating
            a personalized plan that synchronizes with your body's distinctive
            rhythm, recognizing that every step in your diabetic journey
            deserves meticulous attention.
          </p>
          <p>
            At HomeoDesk, we celebrate your pursuit of diabetic well-being – the
            choices you make, the progress you achieve, and your mastery of
            health. We understand that genuine wellness encompasses both
            physical health and emotional resilience. Embark on an expedition
            towards diabetic harmony with us, turning challenges into
            opportunities for empowerment and improved well-being.
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

export default Sugar;
