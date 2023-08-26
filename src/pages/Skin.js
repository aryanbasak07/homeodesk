import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";

function Skin() {
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
              Skin Conditions
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
            Is your skin lost amidst a labyrinth of concerns? HomeoDesk, your
            virtual oasis of skincare, is here to guide you towards skin
            serenity. Whether you battle breakouts that resemble abstract art or
            contend with desert-dryness, we are here to decode your skin's
            unique language and restore its natural radiance.
          </p>
          <p>
            Why endure skin struggles when your skincare journey can be a
            harmonious blend of vitality? Our team of expert skin wellness
            professionals excels in crafting routines tailored to your skin's
            needs. Drawing inspiration from the wisdom of nature, we address
            challenges such as persistent acne or delicate sensitivity. Your
            skin's complexities are opportunities for rejuvenation.
          </p>
          <p>
            Imagine entering a digital retreat where skin concerns meet
            effective remedies. HomeoDesk's online skincare sanctuary is your
            gateway to a world of revitalization. Share your skincare journey
            with our empathetic experts, armed with both ancient insights and
            modern expertise. Through virtual consultations, we design a
            personalized plan that aligns with your skin's unique
            characteristics because every aspect of your skin deserves tailored
            care.
          </p>
          <p>
            At HomeoDesk, we celebrate your pursuit of vibrant skin – the
            dedication you exhibit, the progress you attain, and the
            self-assurance that emanates from within. We understand that
            wellness encompasses both the physical and emotional aspects. Join
            us on a journey towards skin serenity, where skin concerns transform
            into opportunities for renewal and enhanced confidence.
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

export default Skin;
