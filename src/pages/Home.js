import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useEffect } from "react";
import Wave from "react-wavify";
import ReactCardCarousel from "react-card-carousel";
import Tabs from "../components/Tabs";
import Col from "react-bootstrap/Col";
import Text from "../components/assets/text.png";
import Audiocall from "../components/assets/audiocall.png";
import Videocall from "../components/assets/video call.png";
import Pay from "../components/assets/pay.png";
import Calendar from "../components/assets/calendar.png";
import Session from "../components/assets/session.png";
import Prices from "../components/assets/prices.png";
import Hair from "../components/assets/Hair.png";
import Mental from "../components/assets/Mental.png";
import Gastro from "../components/assets/Gas.png";
import Muko from "../components/assets/muko.png";
import Skin from "../components/assets/skin.png";
import Head from "../components/assets/head.png";
import { Link } from "react-router-dom";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

const CARD_STYLE = {
  height: "400px",
  width: "300px",
  textAlign: "center",
  background: "white",
  color: "#999",
  fontSize: "12px",
  borderRadius: "10px",
  marginTop: "0px",
  paddingTop: "0px",
};

function Home() {
  return (
    <>
      <div>
        <Navbar sticky="top" />
      </div>
      <div
        style={{
          backgroundImage: `url(${Head})`,
          display: "flex",
          backgroundColor: "#4F2D92",
          color: "#FFFFFF",
          height: "550px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <h1> Hero section </h1> Remove the h1 element */}
        <div style={{ flex: 1 }}></div>{" "}
        {/* Empty div to create space on the right */}
        {/* Add the Card on the right side */}
        <div
          style={{
            flex: 1,
            maxWidth: "300px",
            marginRight: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MDBCard style={{}}>
            <MDBCardBody>
              <MDBCardTitle>Welcome to HomeoDesk!</MDBCardTitle>
              <MDBCardText>
                Your one stop need for all your problems. With years of
                experience and an amazing team of doctors, we are committed to
                offer you with the best services.
              </MDBCardText>
              <MDBBtn style={{ backgroundColor: "#4F2D92" }}>
                <a>
                  <Link to="/signup" style={{ color: "#FFFFFF" }}>
                    Join Us
                  </Link>
                </a>
              </MDBBtn>{" "}
              {/* Adding a button to the card */}
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          className=""
          style={{
            paddingTop: "50px",
            fontWeight: "bold",
            marginBottom: "30px",
            position: "relative",
          }}
        >
          Our Specialities Consultation - 3 : 1 Career Queries
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              bottom: "-20px",
              left: "50%", // Use "50%" to position the underline at the horizontal center of the title
              transform: "translateX(-50%)", // Adjust the transform to center the underline properly
              width: "100px", // Adjust this value to control the width of the underline
              height: "8px", // Adjust this value to control the thickness of the underline
              backgroundColor: "#9dcd5a",
              borderRadius: "05px",
            }}
          ></span>
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <Container className="my-4">
          <Row>
            {/* Content for larger screens */}
            <Col md={6}>
              <h1 className="mb-4">
                Consultation Sessions With Licensed & Verified Experts
              </h1>
              <p className="mb-4">
                At Homeodesk, we believe that the key to optimal well-being lies
                in treating the individual, not just the symptoms. Our team of
                certified homeopathic experts is dedicated to understanding your
                unique needs and crafting tailored solutions that resonate with
                your body and mind.
              </p>
            </Col>

            {/* Card component for larger screens */}
            <Col md={6}>
              <div style={{ flex: 1, position: "relative" }}>
                <Card />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Tabs />

      <div></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          className=""
          style={{
            paddingTop: "50px",
            fontWeight: "bold",
            marginBottom: "30px",
            position: "relative",
          }}
        >
          What we have for you
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              bottom: "-20px",
              left: "50%", // Use "50%" to position the underline at the horizontal center of the title
              transform: "translateX(-50%)", // Adjust the transform to center the underline properly
              width: "150px", // Adjust this value to control the width of the underline
              height: "8px", // Adjust this value to control the thickness of the underline
              backgroundColor: "#9dcd5a",
              borderRadius: "05px",
            }}
          ></span>
        </h1>
      </div>
      <div className="mt-5 container d-flex flex-column flex-md-row justify-content-md-center gap-4">
        <MDBCard
          alignment="center"
          className="mb-4 image-center d-flex flex-column align-items-center"
        >
          <MDBCardImage
            position="top"
            alt="..."
            src={Text}
            style={{ height: "250px", width: "250px" }}
          />
          <MDBCardBody>
            <MDBCardTitle style={{ fontSize: "30px" }}>
              <span style={{ fontStyle: "bold" }}>Text Consultation</span>
            </MDBCardTitle>
            <MDBCardText>Rs 500 per session</MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <MDBCard
          alignment="center"
          className="mb-4 image-center d-flex flex-column align-items-center"
        >
          <MDBCardImage
            position="top"
            alt="..."
            src={Audiocall}
            style={{ height: "250px", width: "250px" }}
          />
          <MDBCardBody>
            <MDBCardTitle style={{ fontSize: "30px" }}>
              <span style={{ fontStyle: "bold" }}>Audio Consultation</span>
            </MDBCardTitle>
            <MDBCardText>Rs 1000 per session</MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <MDBCard
          alignment="center"
          className="mb-4 image-center d-flex flex-column align-items-center"
        >
          <MDBCardImage
            position="top"
            alt="..."
            src={Videocall}
            style={{ height: "250px", width: "250px" }}
          />
          <MDBCardBody>
            <MDBCardTitle style={{ fontSize: "30px" }}>
              <span style={{ fontStyle: "bold" }}>Video Consultation</span>
            </MDBCardTitle>
            <MDBCardText>Rs 1500 per session</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
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
            Partnerships
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
            }}
          ></span>

          <div className="container mt-5">
            <div className="row">
              <div className="col-md-3 col-sm-6 mb-4">
                <img src={Prices} alt="Image 1" className="img-fluid" />
                <div className="image-text text-center">
                  Choose the right plan
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">
                <img src={Pay} alt="Image 2" className="img-fluid" />
                <div className="image-text text-center">Pay for the plan</div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">
                <img src={Calendar} alt="Image 3" className="img-fluid" />
                <div className="image-text text-center">
                  Select a date and time
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">
                <img src={Session} alt="Image 4" className="img-fluid" />
                <div className="image-text text-center">Join the session</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>Eikhane boshbe Student Corner.</div>

      <div
        style={{
          backgroundColor: "#4F2D92",
          color: "#FFFFFF",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
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
            How It Works
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
            }}
          ></span>

          <div className="container mt-5">
            <div className="row">
              <div className="col-md-3 col-sm-6 mb-4">
                <img src={Prices} alt="Image 1" className="img-fluid" />
                <div className="image-text text-center">
                  Choose the right plan
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">
                <img src={Pay} alt="Image 2" className="img-fluid" />
                <div className="image-text text-center">Pay for the plan</div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">
                <img src={Calendar} alt="Image 3" className="img-fluid" />
                <div className="image-text text-center">
                  Select a date and time
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4">
                <img src={Session} alt="Image 4" className="img-fluid" />
                <div className="image-text text-center">Join the session</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#4F2D92",
          color: "#FFFFFF",
          display: "flex",
          justifyContent: "space-around",
        }}
      ></div>
      <Footer />
    </>
  );
}

function Card({ title, imageSrc, text }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", height: 500 }}>
      <ReactCardCarousel autoplay={true} autoplay_speed={5500}>
        <MDBCard style={CARD_STYLE} alignment="center" key="1">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              style={{ padding: "10px" }}
              src={Hair}
              fluid
              alt="..."
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Hair Problems</MDBCardTitle>
            <MDBCardText>
              Rediscover lustrous locks and combat hair concerns with our
              expert-guided homeopathic remedies.
            </MDBCardText>
            <MDBCardFooter>
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
            </MDBCardFooter>
          </MDBCardBody>
        </MDBCard>

        {/* 2 */}
        <MDBCard style={CARD_STYLE} alignment="center" key="2">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage style={{}} src={Gastro} fluid alt="..." />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Gastrointestinal Disorders</MDBCardTitle>
            <MDBCardText>
              Restore balance to your digestive system and find relief from
              gastrointestinal discomfort.
            </MDBCardText>
            <MDBCardFooter>
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
            </MDBCardFooter>
          </MDBCardBody>
        </MDBCard>
        {/* 3 */}
        <MDBCard style={CARD_STYLE} alignment="center" key="3">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage style={{}} src={Muko} fluid alt="..." />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Musculoskeletal Ailments</MDBCardTitle>
            <MDBCardText>
              Alleviate pain and enhance mobility with holistic treatment for
              musculoskeletal conditions.
            </MDBCardText>
            <MDBCardFooter>
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
            </MDBCardFooter>
          </MDBCardBody>
        </MDBCard>
        {/* 4 */}
        <MDBCard style={CARD_STYLE} alignment="center" key="3">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              style={{ height: "280px", width: "280px" }}
              src={Mental}
              alt="Mental Health"
              position="top"
              className="img-fluid rounded"
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Mental Well-being</MDBCardTitle>
            <MDBCardText>
              Prioritize mental health with gentle yet potent homeopathic
              support for stress, anxiety, and emotional imbalances.
            </MDBCardText>
            <MDBCardFooter>
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
            </MDBCardFooter>
          </MDBCardBody>
        </MDBCard>
        {/* 5 */}
        <MDBCard style={CARD_STYLE} alignment="center" key="3">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              style={{ height: "220px", width: "220px" }}
              src={Skin}
              fluid
              alt="..."
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Skin Conditions</MDBCardTitle>
            <MDBCardText>
              Bid farewell to skin woes with homeopathic solutions that
              rejuvenate and nourish your skin naturally.
            </MDBCardText>
            <MDBCardFooter>
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
            </MDBCardFooter>
          </MDBCardBody>
        </MDBCard>
      </ReactCardCarousel>
    </div>
  );
}

export default Home;
