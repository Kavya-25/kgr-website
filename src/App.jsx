import { useState, useEffect } from "react";
import "./App.scss";
import { FramerScroll } from "./components/FramerScroll/FramerScroll";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import { Services } from "./pages/Services/Services";
import BarLoader from "react-spinners/BarLoader";

function App() {
  const [isloading, setIsLoading] = useState(false);
  const [color, setColor] = useState("#BBE1FA");
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {isloading ? (
        <div className="loading">
        <img src="/images/whitelogo.png" alt="" />
        <p>Loading...</p>
        <BarLoader
          color={color}
          loading={isloading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        </div>
      ) : (
        <>
          <Navbar />
          <FramerScroll />
          <Home />
          <About />
          <Services />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
