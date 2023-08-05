import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function SignModule() {
  return (
    <>
      <Navbar />
      <MDBContainer fluid style={{ maxWidth: "800px" }}>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <div style={{ position: "relative" }}>
                  <h1
                    className="flex justify-content-left"
                    style={{
                      paddingTop: "20px",
                      fontWeight: "bold",
                      marginBottom: "05px",
                      position: "relative",
                    }}
                  >
                    Sign Up with Us.
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
                    }}
                  ></span>
                </div>

                <div
                  className="d-flex flex-row align-items-center mb-4 mt-5"
                  style={{ width: "100%" }}
                >
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Your Name"
                    id="form1"
                    type="text"
                    className="w-100"
                  />
                </div>

                <div
                  className="d-flex flex-row align-items-center mb-4"
                  style={{ width: "100%" }}
                >
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput label="Your Email" id="form2" type="email" />
                </div>

                <div
                  className="d-flex flex-row align-items-center mb-4"
                  style={{ width: "100%" }}
                >
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput label="Password" id="form3" type="password" />
                </div>

                <div
                  className="d-flex flex-row align-items-center mb-6"
                  style={{ width: "100%" }}
                >
                  <MDBIcon fas icon="key me-3" size="lg" />
                  <MDBInput
                    label="Repeat your password"
                    id="form4"
                    type="password"
                  />
                </div>

                <div className="mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="I agree to all terms and conditions."
                  />
                </div>

                <MDBBtn className="mb-4" size="lg" style={{ backgroundColor: "#4F2D92", borderRadius: "25px" }}>
                  Register
                </MDBBtn>

                <div className="mb-4">
                  <p>
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </div>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      <Footer/>
    </>
  );
}

export default SignModule;
