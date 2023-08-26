import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";

function Mental() {
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
              Mental Wellness
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
            Is your mind a whirlwind of thoughts and emotions? HomeoDesk, your
            virtual haven for mental well-being, is here to guide you toward
            mindfulness and emotional equilibrium. Whether your thoughts race
            like lightning or your emotions ebb and flow like tides, we are here
            to help you navigate the complex landscape of your mind.
          </p>
          <p>
            Why endure inner turmoil when your mental journey can be a symphony
            of tranquility? Our team of compassionate wellness experts excels in
            creating strategies tailored to your emotional needs. Drawing from
            the wisdom of nature, we address challenges such as persistent
            anxiety or the chaos of stress. Your mental puzzles serve as
            stepping stones to emotional growth.
          </p>
          <p>
            Imagine entering a digital refuge where mental well-being takes
            root. HomeoDesk's online mental wellness center offers access to a
            realm of emotional renewal. Share your mental journey with our
            empathetic professionals, armed with both ancient insights and
            modern psychology. Through virtual sessions, we assist you in
            crafting a personalized plan that aligns with your mind's unique
            rhythm because every aspect of your mental landscape deserves
            individualized attention.
          </p>
          <p>
            At HomeoDesk, we celebrate your journey toward mental well-being –
            the steps you take, the progress you make, and the clarity that
            emerges. We understand that holistic wellness encompasses both
            psychological health and emotional resilience. Embark on an
            expedition of mindful growth with us, transforming challenges into
            opportunities for self-discovery and equilibrium.
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

export default Mental;
