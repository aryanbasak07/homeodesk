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
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Arth from "../components/assets/arth.png";
import Sugar from "../components/assets/sugar.png";
import Mota from "../components/assets/mota.png";
import Coun from "../components/assets/counter.png";
import Fit from "../components/assets/fit.png";
import Partner from "../components/assets/partner.png";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from "mdb-react-ui-kit";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

const CARD_STYLE = {
  height: "100px",
  width: "200px",
  textAlign: "center",
  background: "white",
  color: "#999",
  fontSize: "12px",
  borderRadius: "10px",
  marginTop: "0px",
  paddingTop: "0px",
  backgroundColor: "#4F2D92",
  color: "#FFFFFF",
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
          class: "img-fluid",
          backgroundColor: "#4F2D92",
          color: "#FFFFFF",
          height: "500px",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Create an empty div to push the card to the right */}
        <div style={{ flex: 1 }}></div>

        <div
          style={{
            maxWidth: "300px",
            marginRight: "100px", // Adjust margin to control the distance from the right edge
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MDBCard style={{ marginTop: "50px", marginLeft: "0px" }}>
            <MDBCardBody>
              <MDBCardTitle>Welcome to HomeoDesk!</MDBCardTitle>
              <MDBCardText>
                Your one-stop solution for all your problems. With years of
                experience and an amazing team of doctors, we are committed to
                offering you the best services.
              </MDBCardText>
              <Link to="/signup" style={{ color: "#FFFFFF" }}>
                <MDBBtn style={{ backgroundColor: "#4F2D92" }}>Join Us</MDBBtn>
              </Link>
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
          Our Specialities
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
                At Homeodesk, we hold a strong belief in the power of holistic
                well-being, recognizing the importance of treating the
                individual as a whole, rather than simply addressing isolated
                symptoms. Our distinguished team of certified homeopathic
                experts is unwavering in their commitment to thoroughly
                comprehend your unique needs. This allows us to create tailored
                solutions that deeply resonate with both your body and mind,
                fostering a comprehensive sense of healing.
              </p>
              <p>
                Our approach is rooted in delving into the underlying causes,
                working to restore balance and promote long-lasting wellness.
                With an unwavering dedication to personalized care, we strive to
                craft a therapeutic journey that aligns with your distinct
                nature and requirements. In a world where individuality is
                paramount, Homeodesk stands as your partner in achieving genuine
                well-being. Our mission is centered on not just achieving
                health, but on enhancing the very quality of your life.
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
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link
                    eventKey="first"
                    style={{ backgroundColor: "#4F2D92", color: "#FFFFFF" }}
                    active
                  >
                    Text Consultation
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="second"
                    style={{ backgroundColor: "#4F2D92", color: "#FFFFFF" }}
                  >
                    Audio Consultation
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="third"
                    style={{ backgroundColor: "#4F2D92", color: "#FFFFFF" }}
                  >
                    Video Consultation
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
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
                        <span style={{ fontStyle: "bold" }}>
                          Text Consultation
                        </span>
                      </MDBCardTitle>
                      <MDBCardText>
                        <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
                          <li>Convenient and accessible from anywhere</li>
                          <li>Real-time, instant communication</li>
                          <li>Flexible scheduling options</li>
                          <li>Secure and private conversations</li>
                          <li>Expert advice and guidance</li>
                          <li>15 days follow up included</li>
                          <li>Medicines as per prescription</li>
                        </ul>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
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
                        <span
                          style={{
                            fontStyle: "bold",
                            justifyContent: "center",
                          }}
                        >
                          Audio Consultation
                        </span>
                      </MDBCardTitle>
                      <MDBCardText>
                        <ul
                          style={{
                            listStyle: "none",
                            justifyContent: "center",
                            paddingLeft: "0px",
                          }}
                        >
                          <li>Real-time, voice-based communication</li>
                          <li>Convenient and accessible from anywhere</li>
                          <li>Flexible scheduling options</li>
                          <li>Secure and private conversations</li>
                          <li>Expert advice and guidance</li>
                          <li>High-quality audio connections</li>
                          <li>15 days follow up included</li>
                          <li>Medicines as per prescription</li>
                        </ul>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
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
                        <span style={{ fontStyle: "bold" }}>
                          Video Consultation
                        </span>
                      </MDBCardTitle>
                      <MDBCardText>
                        <ul
                          style={{
                            listStyle: "none",
                            justifyContent: "center",
                            paddingLeft: "0px",
                          }}
                        >
                          <li>Real-time, face-to-face communication</li>
                          <li>Convenient and accessible from anywhere</li>
                          <li>Flexible scheduling options</li>
                          <li>Secure and private conversations</li>
                          <li>Expert advice and guidance</li>
                          <li>High-quality video and audio connections</li>
                          <li>15 days follow up included</li>
                          <li>Medicines as per prescription</li>

                        </ul>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
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
              <div className="col-md-6 mb-4">
                <p>
                  At HomeoDesk, we believe in the power of collaboration and
                  working together to create innovative solutions for the
                  betterment of the homeopathy community. Our commitment to
                  excellence extends beyond our products and services; it also
                  encompasses the valuable partnerships we cultivate. We're
                  dedicated to building strong relationships with organizations
                  that share our passion for holistic wellness and
                  patient-centric care.
                </p>
                <p>
                  Collaborate with HomeoDesk to unlock new possibilities in
                  homeopathy. Whether you're an educational institution, a
                  research center, a healthcare provider, or an organization
                  with a vested interest in holistic wellness, we welcome the
                  opportunity to explore how we can work together to make a
                  meaningful impact.
                </p>
                <Link to="/contact">
                  <MDBBtn
                    style={{
                      backgroundColor: "#4F2D92",
                      alignSelf: "center",
                      width: "150px",
                    }}
                    href="#"
                  >
                    Collaborate with Us
                  </MDBBtn>
                </Link>
              </div>
              <div className="col-md-6 mb-4">
                <MDBCardImage
                  style={{ padding: "10px" }}
                  src={Partner}
                  fluid
                  alt="..."
                />
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
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      <MDBCard style={CARD_STYLE} alignment="center" key="1">
        <Link to="/hair">
          <MDBCardBody>
            <MDBCardTitle style={{ color: "white" }}>
              Hair Problems
            </MDBCardTitle>
          </MDBCardBody>
        </Link>
      </MDBCard>
      <MDBCard style={CARD_STYLE} alignment="center" key="2">
        <Link to="/gastro">
          <MDBCardBody>
            <MDBCardTitle style={{ color: "white" }}>
              Gastrointestinal Problems
            </MDBCardTitle>
          </MDBCardBody>
        </Link>
      </MDBCard>
      <MDBCard style={CARD_STYLE} alignment="center" key="3">
        <Link to="/musculoskeletal">
          <MDBCardBody>
            <MDBCardTitle style={{ color: "white" }}>
              Musculoskeletal Ailments
            </MDBCardTitle>
          </MDBCardBody>
        </Link>
      </MDBCard>
      <MDBCard style={CARD_STYLE} alignment="center" key="5">
        <Link to="/skin">
          <MDBCardBody>
            <MDBCardTitle style={{ color: "white" }}>
              Skin Conditions
            </MDBCardTitle>
          </MDBCardBody>
        </Link>
      </MDBCard>
      <MDBCard style={CARD_STYLE} alignment="center" key="6">
        <Link to="/sugar">
          <MDBCardBody>
            <MDBCardTitle style={{ color: "white" }}>Diabetes</MDBCardTitle>
          </MDBCardBody>
        </Link>
      </MDBCard>
      <MDBCard style={CARD_STYLE} alignment="center" key="7">
        <Link to="/coun">
          <MDBCardBody>
            <MDBCardTitle style={{ color: "white" }}>Counselling</MDBCardTitle>
          </MDBCardBody>
        </Link>
      </MDBCard>
      <MDBCard style={CARD_STYLE} alignment="center" key="8">
        <Link to="/weight">
          <MDBCardBody>
            <MDBCardTitle style={{ color: "white" }}>Weight Loss</MDBCardTitle>
          </MDBCardBody>
        </Link>
      </MDBCard>
      {/* 9 */}
      <MDBCard style={CARD_STYLE} alignment="center" key="9">
        <Link to="/exer">
          <MDBCardBody>
            <MDBCardTitle style={{ color: "white" }}>
              Exercise Routine
            </MDBCardTitle>
          </MDBCardBody>
        </Link>
      </MDBCard>
      <MDBCard style={CARD_STYLE} alignment="center" key="9">
        <Link to="/mental">
          <MDBCardBody>
            <MDBCardTitle style={{ color: "white" }}>
              Mental Well-being
            </MDBCardTitle>
          </MDBCardBody>
        </Link>
      </MDBCard>
    </div>
  );
}

export default Home;
