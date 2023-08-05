import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardHeader,
  MDBCol,
  MDBCardBody,
  MDBTabsPane,
  MDBTabsContent,
  MDBInput,
  MDBBtn,
  MDBTextArea,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Phone from "../components/assets/phone.png";
import Email from "../components/assets/email.png";
import Connect from "../components/assets/connect.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email and phone number here
    // For simplicity, we'll just check if the email and phone number are not empty
    if (!formData.email || !formData.phoneNumber) {
      alert("Please provide a valid email and phone number");
      return;
    }
    // Handle form submission here (you can send the data to your backend or perform any other action)
    console.log("Form Data:", formData);
    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
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
            <Col md={8}>
              <MDBContainer fluid className="mt-5">
                <section className="text-center">
                  <div style={{ position: "relative" }}>
                    <h1
                      className="flex justify-content-left"
                      style={{
                        paddingTop: "50px",
                        fontWeight: "bold",
                        marginBottom: "05px",
                        position: "relative",
                      }}
                    >
                      Don't wonder. Let's talk.
                    </h1>
                    <p>
                      Drop in your questions and our team will reach out to you!
                    </p>
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
                      }}
                    ></span>
                  </div>

                  <MDBRow className="d-flex justify-content-center">
                    <MDBCol md="6">
                      <MDBCard
                        style={{
                          backgroundColor: "",
                          marginBottom: "20px",
                          marginTop: "20px",
                        }}
                      >
                        <MDBCardHeader style={{ color: "grey" }}>
                          <MDBTabsContent>
                            <MDBTabsPane show>
                              {/* <div style={{ display: "flex", flexDirection: "row" }}> */}
                              <div>
                                <form onSubmit={handleSubmit}>
                                  <MDBInput
                                    style={{
                                      color: "black",
                                      borderRadius: "10px",
                                    }}
                                    className="mb-4"
                                    type="text"
                                    labelStyle={{ color: "grey" }}
                                    id="name"
                                    name="name"
                                    label="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                  />

                                  <MDBInput
                                    style={{ color: "black" }}
                                    className="mb-4"
                                    labelStyle={{ color: "grey" }}
                                    type="email"
                                    id="email"
                                    name="email"
                                    label="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                  />

                                  <MDBInput
                                    style={{ color: "black" }}
                                    className="mb-4"
                                    labelStyle={{ color: "grey" }}
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    label="Phone Number"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                  />

                                  <MDBInput
                                    style={{ color: "black" }}
                                    className="mb-4"
                                    labelStyle={{ color: "grey" }}
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    label="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                  />

                                  <MDBTextArea
                                    style={{ color: "black" }}
                                    className="mb-4"
                                    labelStyle={{ color: "grey" }}
                                    id="message"
                                    name="message"
                                    label="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                  />

                                  <MDBBtn
                                    type="submit"
                                    block
                                    className="mb-4"
                                    style={{
                                      backgroundColor: "#4F2D92",
                                      borderRadius: "30px",
                                    }}
                                  >
                                    Submit
                                  </MDBBtn>
                                </form>
                              </div>
                            </MDBTabsPane>
                          </MDBTabsContent>
                        </MDBCardHeader>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow>
                </section>
              </MDBContainer>
            </Col>

            {/* Card component for larger screens */}
            <Col md={4}>
              <div className="d-flex flex-column align-items-center justify-content-center h-100">
                <img
                  src={Connect}
                  alt="Connection"
                  className="img-fluid"
                  style={{ width: "80%", height: "auto" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mt-5 container d-flex flex-column flex-md-row justify-content-md-center gap-4">
        <MDBCard
          alignment="center"
          className="mb-4 image-center d-flex flex-column align-items-center"
        >
          <MDBCardImage
            position="top"
            alt="..."
            src={Phone}
            style={{ height: "250px", width: "250px" }}
          />
          <MDBCardBody>
            <MDBCardTitle style={{ fontSize: "30px" }}>
              <span style={{ fontStyle: "bold" }}>Phone</span>
            </MDBCardTitle>
            <MDBCardText>+91 9123456780</MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <MDBCard
          alignment="center"
          className="mb-4 image-center d-flex flex-column align-items-center"
        >
          <MDBCardImage
            position="top"
            alt="..."
            src={Email}
            style={{ height: "250px", width: "250px" }}
          />
          <MDBCardBody>
            <MDBCardTitle style={{ fontSize: "30px" }}>
              <span style={{ fontStyle: "bold" }}>Email</span>
            </MDBCardTitle>
            <MDBCardText>contact@homeodesk.com</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
