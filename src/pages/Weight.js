import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";

function Weight() {
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
              Weight Loss
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
            Is your weight loss journey feeling like an intricate labyrinth with
            no clear exit? Look no further than HomeoDesk, your virtual
            sanctuary for health transformations, committed to guiding you
            through the twists and turns. Whether your diets leave you
            unsatisfied or your workouts feel like an uphill battle, we are here
            to redefine your weight loss narrative.
          </p>
          <p>
            Why endure a struggle when your path to weight wellness can be a
            harmonious journey? Our team of experienced weight wellness experts
            excels in designing plans tailored to your body's unique
            requirements. Drawing inspiration from the wisdom of nature, we
            address challenges such as waning motivation and irresistible
            cravings. Your weight loss puzzles are stepping stones on your road
            to success.
          </p>
          <p>
            Envision entering a digital oasis where weight plateaus are
            temporary pauses, not dead ends. HomeoDesk's online weight wellness
            center is your gateway to a world of healthier living. Share your
            weight goals with our empathetic professionals, armed with both
            ancient insights and modern scientific knowledge. Through virtual
            consultations, we meticulously craft a personalized plan that aligns
            with your body's distinct rhythm, recognizing that every step in
            your journey deserves individualized attention.
          </p>
          <p>
            At HomeoDesk, we celebrate your pursuit of a healthier weight – your
            choices, progress, and personal growth. We believe that true
            wellness encompasses both physical and emotional well-being. Embark
            on a transformative expedition with us, turning bland diets into
            nourishing delights and mundane workouts into empowering rituals.
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

export default Weight;
