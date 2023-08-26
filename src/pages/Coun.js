import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";

function Coun() {
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
              Counselling
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
            Is your emotional compass in need of recalibration? Look no further
            than HomeoDesk, your virtual sanctuary for inner exploration,
            dedicated to guiding you through the intricate maze of emotions.
            Whether your thoughts feel as tangled as a thicket or your emotions
            seem as elusive as shadows, we are here to illuminate your path
            towards emotional clarity.
          </p>
          <p>
            Why endure confusion when your emotional landscape can be a
            masterpiece of self-understanding? Our team of compassionate
            counselors excels in providing guidance through the complexities of
            your psyche. Drawing insights from nature's wisdom, we address
            concerns such as persistent stress or lingering self-doubt. Your
            emotional challenges serve as opportunities for profound
            self-growth.
          </p>
          <p>
            Imagine entering a digital haven where emotional turmoil serves as a
            stepping stone to personal growth. HomeoDesk's online counseling
            center offers a gateway to self-discovery. Share your emotional
            journey with our empathetic experts, armed with both ancient
            insights and contemporary understanding. Through virtual sessions,
            we craft a personalized path towards healing, recognizing that your
            emotional well-being deserves individualized attention.
          </p>
          <p>
            At HomeoDesk, we celebrate your quest for emotional well-being – the
            moments of vulnerability, the strides towards healing, and the
            embrace of your authentic self. We believe that genuine wellness
            encompasses emotional resilience and authenticity. Embark on an
            expedition of self-discovery with us, transforming emotional
            struggles into catalysts for growth and self-acceptance.
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

export default Coun;
