import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      </div>
      <Footer />
    </>
  );
}

export default Career;
