import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";

function Gastro() {
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
              Gastrointestinal Disorders
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
            Is your gastrointestinal system causing concern? HomeoDesk, your
            virtual haven for digestive care, is here to guide you toward gut
            wellness and comfort. Whether you're dealing with stomach issues
            that mimic a rollercoaster or digestion that moves as slow as
            molasses, we are here to decipher the intricacies of your digestive
            health.
          </p>
          <p>
            Why endure digestive discomfort when your gut journey can be a
            harmonious symphony of balance? Our team of gastrointestinal
            wellness experts excels in crafting strategies tailored to your
            body's unique needs. Drawing inspiration from nature's wisdom, we
            address challenges like persistent bloating or the unpredictability
            of irritable bowel syndrome. Your digestive complexities serve as
            opportunities for transformation.
          </p>
          <p>
            Imagine entering a digital sanctuary where digestive wellness takes
            root. HomeoDesk's online digestive care center opens the door to a
            world of gut renewal. Share your digestive journey with our
            empathetic experts, equipped with ancient insights and modern
            nutritional science. Through virtual consultations, we assist you in
            creating a personalized plan that aligns with your gut's unique
            rhythm because every aspect of your digestive health deserves
            specialized attention.
          </p>
          <p>
            At HomeoDesk, we celebrate your quest for digestive well-being – the
            steps you take, the progress you make, and the comfort that emerges.
            We understand that holistic wellness encompasses both physical
            health and nutritional harmony. Embark on an expedition of digestive
            renewal with us, turning challenges into opportunities for
            rejuvenation and comfort.
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

export default Gastro;
