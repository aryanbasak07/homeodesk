import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MDBBtn } from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Musculoskeletal() {
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
              Musculoskeletal Ailments
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
            Is your body's musculoskeletal system sending distress signals?
            HomeoDesk, your virtual haven for musculoskeletal care, is here to
            guide you toward renewed motion and vitality. Whether your joints
            creak like an old staircase or your muscles protest with each step,
            we are here to decode your body's language and restore its natural
            fluidity.
          </p>
          <p>
            Why endure discomfort when your body's journey can be a harmonious
            ballet of wellness? Our team of musculoskeletal wellness experts
            excels in crafting strategies tailored to your body's unique needs.
            Drawing from the wisdom of nature, we address challenges like
            chronic pain or mobility limitations. Your body's intricacies are
            opportunities for rejuvenation.
          </p>
          <p>
            Imagine entering a digital refuge where musculoskeletal wellness
            takes root. HomeoDesk's online musculoskeletal care center provides
            access to a world of renewed motion. Share your physical journey
            with our empathetic experts, equipped with ancient insights and
            modern therapeutic knowledge. Through virtual consultations, we
            assist you in creating a personalized plan that aligns with your
            body's unique rhythm because every muscle and joint deserves
            individualized attention.
          </p>
          <p>
            At HomeoDesk, we celebrate your quest for musculoskeletal well-being
            – the steps you take, the progress you make, and the grace that
            emerges. We understand that holistic wellness encompasses both
            physical health and inner strength. Embark on an expedition of
            musculoskeletal renewal with us, turning discomfort into
            opportunities for increased mobility and vitality.
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

export default Musculoskeletal;
