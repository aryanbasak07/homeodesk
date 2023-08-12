import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <MDBFooter
      style={{ backgroundColor: "#4F2D92", color: "#FFFFFF" }}
      className="text-center text-lg-start text-muted"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block" style={{ color: "#FFFFFF" }}>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon style={{ color: "#FFFFFF" }} fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon style={{ color: "#FFFFFF" }} fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon style={{ color: "#FFFFFF" }} fab icon="instagram" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol
              md="3"
              lg="4"
              xl="3"
              className="mx-auto mb-4 justify-content-space-around"
            >
              <h6
                style={{ color: "#FFFFFF" }}
                className="text-uppercase fw-bold mb-4"
              >
                HomeoDesk
              </h6>
              <p style={{ color: "#FFFFFF" }}>
                Your One-Stop Destination for Tailored Natural Healing, Expert
                Consultations, and Reviving Wellness from the Comfort
                of Your Own Space!
              </p>
            </MDBCol>

            {/* <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6
                style={{ color: "#FFFFFF" }}
                className="text-uppercase fw-bold mb-4"
              >
                Products
              </h6>
              <p style={{ color: "#FFFFFF" }}>
                <a
                  style={{ color: "#FFFFFF" }}
                  href="#!"
                  className="text-reset"
                >
                  Text Consultation
                </a>
              </p>
              <p style={{ color: "#FFFFFF" }}>
                <a
                  style={{ color: "#FFFFFF" }}
                  href="#!"
                  className="text-reset"
                >
                  Audio Consultation
                </a>
              </p>
              <p style={{ color: "#FFFFFF" }}>
                <a
                  style={{ color: "#FFFFFF" }}
                  href="#!"
                  className="text-reset"
                >
                  Video Consultation
                </a>
              </p>
            </MDBCol> */}

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6
                style={{ color: "#FFFFFF" }}
                className="text-uppercase fw-bold mb-4"
              >
                Quick links
              </h6>
              <p style={{ color: "#FFFFFF" }}>
                <a
                  style={{ color: "#FFFFFF" }}
                  href="#!"
                  className="text-reset"
                >
                  Pricing
                </a>
              </p>
              <p style={{ color: "#FFFFFF" }}>
                <a
                  style={{ color: "#FFFFFF" }}
                  href="#!"
                  className="text-reset"
                >
                  Consult Now
                </a>
              </p>
              <p style={{ color: "#FFFFFF" }}>
                <a style={{ color: "#FFFFFF" }} href='#!' className='text-reset'>
                  <Link to="/career" style={{ color: "#FFFFFF" }}>Career</Link>
                </a>
              </p>
              <p style={{ color: "#FFFFFF" }}>
                <a
                  style={{ color: "#FFFFFF" }}
                  href="#!"
                  className="text-reset"
                >
                  Help
                </a>
              </p>
              {/* <p style={{ color: "#FFFFFF" }}>
                <a
                  style={{ color: "#FFFFFF" }}
                  href="#!"
                  className="text-reset"
                >
                  Disclaimer : 
                </a>
              </p> */}
              <p style={{ color: "#FFFFFF" }}>
                <Link to="/terms">
                <a
                  style={{ color: "white" }}
                  href="#!"
                >
                  Terms and Conditions
                </a>
                </Link>
              </p>
              <p style={{ color: "#FFFFFF" }}>
                <Link to="/privacypolicy">
                <a
                  style={{ color: "white" }}
                  href="#!"
                >
                  Privacy Policy
                </a>
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6
                style={{ color: "#FFFFFF" }}
                className="text-uppercase fw-bold mb-4"
              >
                Contact
              </h6>
              <p style={{ color: "#FFFFFF" }}>
                <MDBIcon
                  style={{ color: "#FFFFFF" }}
                  icon="home"
                  className="me-2"
                />
                Bangalore, India
              </p>
              <p style={{ color: "#FFFFFF" }}>
                <MDBIcon
                  style={{ color: "#FFFFFF" }}
                  icon="envelope"
                  className="me-3"
                />
                contact@homeodesk.com
              </p>
              <p style={{ color: "#FFFFFF" }}>
                <MDBIcon
                  style={{ color: "#FFFFFF" }}
                  icon="phone"
                  className="me-3"
                />{" "}
                +91 91234 56789
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="justify-content-center text-center p-4"
        style={{ backgroundColor: "#4F2D92", color: "white" }}
      >
        © 2023 Copyright Homeo Desk
      </div>
    </MDBFooter>
  );
}
