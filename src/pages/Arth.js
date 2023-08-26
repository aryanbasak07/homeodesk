import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";

function Arth() {
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
              Arthiritis
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
            Are your joints impeding your daily life? Look no further than
            HomeoDesk, your virtual haven for holistic well-being, committed to
            revitalizing your joint health. Whether it's hip discomfort during
            yoga or shoulder irritation with minor movements, we decipher and
            address your joint concerns.
          </p>
          <p>
            Why endure discomfort when your joints can experience seamless
            mobility? Our team of seasoned homeopathic experts excels in
            optimizing joint health. Employing remedies derived from nature's
            wisdom, we effectively tackle issues like arthritis and persistent
            inflammation. Your joint discomfort is a central focus within our
            comprehensive approach to holistic health.
          </p>
          <p>
            Imagine entering a virtual retreat where joint discomfort is
            history. HomeoDesk's online sanctuary unlocks renewed joint
            vitality. Share your joint experiences with our empathetic
            professionals, equipped with timeless knowledge and modern insights.
            Through virtual consultations, we craft a tailored plan, recognizing
            that each joint has unique needs.
          </p>
          <p>
            At HomeoDesk, we celebrate the resilience of your joints – their
            flexibility, adaptability, and graceful movements. Genuine wellness
            encompasses both physical and emotional aspects. Join us on a
            journey to restore joint vitality, transforming stiffness into
            fluidity and discomfort into graceful ease.
          </p>
          <p>
            Ready to bid farewell to joint discomfort? Join us in the pursuit of
            optimal joint health, where ancient wisdom merges seamlessly with
            contemporary care. Secure your virtual consultation today and let's
            compose a new chapter in your joint health story – from discomfort
            to delightful mobility.
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

export default Arth;
