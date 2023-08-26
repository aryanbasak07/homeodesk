import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

function Career() {
  return (
    <>
      <Navbar />

      <div>
        <div style={{ position: "relative" }}>
          <h1
            className=""
            style={{
              marginTop: "50px",
              paddingTop: "10px",
              fontWeight: "bold",
              marginBottom: "0px",
              textAlign: "center",
            }}
          >
            Career
          </h1>
          <span
            style={{
              display: "block",
              justifyContent: "center",
              position: "relative", // Change the position to relative
              top: "10px", // Adjust the top value to control the distance between the title and the underline
              left: "50%",
              transform: "translateX(-50%)",
              width: "100px",
              height: "8px",
              backgroundColor: "#9dcd5a",
              borderRadius: "5px",
              marginBottom: "50px",
            }}
          ></span>
        </div>
        <Container>
          <section>
            <h2>Why Homeodesk?</h2>
            <p>
              At Homeodesk, we believe that great people make great
              companies. We're always on the lookout for talented individuals
              who are passionate, innovative, and dedicated to making a
              difference.
            </p>
          </section>

          <section>
            <h2>Our Culture</h2>
            <p>
              Our culture is built on a foundation of integrity, respect, and
              excellence. We encourage a healthy work-life balance and support
              professional development and growth. Our commitment to employee
              well-being extends beyond the workplace, with various initiatives
              designed to ensure our team members thrive in all aspects of their
              lives.
            </p>
          </section>

          <section>
            <h2>What We Offer</h2>
            <ul>
              <li>Competitive Compensation</li>
              <li>Comprehensive Benefits</li>
              <li>Career Development</li>
              <li>Innovation</li>
              <li>Work-Life Balance</li>
            </ul>
          </section>

          <section>
            <h2>Current Openings</h2>
            <p>
              While we may not have any specific openings at the moment, we're
              always interested in connecting with talented individuals who
              share our values and vision. If you believe you would be a great
              fit for Homeodesk, please feel free to send us your
              resume and a cover letter outlining your skills, experience, and
              what you can bring to our team. We'll keep your information on
              file and reach out when a suitable opportunity arises.
            </p>
          </section>

          <section>
            <h2>How to Apply</h2>
            <p>
              To apply for a position at Homeodesk, please send your
              resume and cover letter to{" "}
              <a href="mailto:contact@homeodesk.com">contact@homeodesk.com</a>
              . Be sure to include the position title you're interested in or
              your area of expertise in the subject line. Our team will review
              your application and get in touch if there is a match.
            </p>
          </section>

          <footer>
            <p>
              Thank you for considering a career with Homeodesk. We
              look forward to the possibility of working together to achieve our
              shared goals and make a positive impact on the world.
            </p>
          </footer>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Career;
