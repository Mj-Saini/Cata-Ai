import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./componets.jsx/Header";
import Hero from "./componets.jsx/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./componets.jsx/Footer";
import Loader from "./componets.jsx/Loader";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {" "}
      <Loader />
      <div className="overflow-hidden">
        <div className=" position-relative">
          <div className=" bg_colormove position-absolute"></div>
          <div style={{ zIndex: "12344", position: "relative" }}>
            {" "}
            <Header />
          </div>
          <Hero />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
