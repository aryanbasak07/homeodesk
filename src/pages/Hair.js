import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";

function Hair() {
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
              Hair Problems
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
            Is your hair presenting challenges? HomeoDesk is your premier
            virtual destination, providing comprehensive solutions for all your
            hair concerns. From unruly frizz to persistent split ends, we
            specialize in decoding the complexities of your hair. Why settle for
            mediocrity when your hair can be a masterpiece?
          </p>
          <p>
            Our team of seasoned homeopathic professionals has mastered the art
            of taming even the most unmanageable hair. Utilizing the profound
            wisdom of nature, we address issues such as dandruff and hair loss
            with the precision of our proven remedies.
          </p>
          <p>
            Envision a digital realm where bad hair days are relegated to the
            past. HomeoDesk's online platform offers an exclusive space for hair
            transformation. Share your hair experiences with our empathetic
            experts, armed with both ancient wisdom and contemporary expertise.
            Through virtual consultations, we meticulously tailor solutions to
            suit your hair's unique requirements.
          </p>
          <p>
            At HomeoDesk, we celebrate the individuality of your hair, embracing
            its distinctive qualities, textures, and hues. We understand that
            exceptional hair isn't solely about aesthetics; it's about the
            confidence emanating from a healthy scalp. Embark on a journey with
            us to elevate lackluster locks into a resplendent spectacle.
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

export default Hair;
