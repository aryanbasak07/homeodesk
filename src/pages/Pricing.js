import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wave from "react-wavify";
import {
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardHeader,
    MDBCol,
    MDBCardBody,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsPane,
    MDBTabsContent,
    MDBIcon,
    MDBInput,
    MDBBtn,
    MDBTextArea,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBCardImage,
  } from "mdb-react-ui-kit";
  import Videocall from "../components/assets/video call.png"
  import Audiocall from "../components/assets/audiocall.png"
  import Text from "../components/assets/text.png"

const Pricing = () => {
  return (
    <div>
      <Navbar></Navbar>
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
          Choose the plan the fits you.
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
        <MDBCard alignment="center" className="mb-4 image-center d-flex flex-column align-items-center">
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

        <MDBCard alignment="center" className="mb-4 image-center d-flex flex-column align-items-center">
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

        <MDBCard alignment="center" className="mb-4 image-center d-flex flex-column align-items-center">
          <MDBCardImage
            position="top"
            alt="..."
            src={Videocall}
            style={{ height: "250px", width: "250px", justifyContent: "center", display: "center" }}
          />
          <MDBCardBody>
            <MDBCardTitle style={{ fontSize: "30px" }}>
              <span style={{ fontStyle: "bold" }}>Video Consultation</span>
            </MDBCardTitle>
            <MDBCardText>Rs 1500 per session</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Pricing;
