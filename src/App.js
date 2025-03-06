/* global FinisherHeader */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wrap FinisherHeader in a function
    const initFinisher = () => {
      new FinisherHeader({
        "count": 11,
        "size": {
          "min": 1300,
          "max": 1500,
          "pulse": 0
        },
        "speed": {
          "x": { "min": 0.6, "max": 3 },
          "y": { "min": 0.6, "max": 3 }
        },
        "colors": {
          "background": "#4a2fbd",
          "particles": [
            "#aa367c",
            "#7e3a7f",
            "#231efe",
            "#d30744"
          ]
        },
        "blending": "lighten",
        "opacity": {
          "center": 0.6,
          "edge": 0
        },
        "skew": 0,
        "shapes": ["c"]
      });
    };

    // Function to hide loading screen
    const hideLoader = () => {
      setLoading(false);
    };

    // If the page is already fully loaded, init Finisher and hide loader immediately
    if (document.readyState === 'complete') {
      initFinisher();
      hideLoader();
    } else {
      // Otherwise, wait for the load event
      window.addEventListener('load', () => {
        initFinisher();
        // Add a small delay to ensure smooth transition
        setTimeout(hideLoader, 500);
      });
      return () => window.removeEventListener('load', hideLoader);
    }
  }, []);

  return (
    <div className="App">
      {loading && (
        <div className="loading-screen">
          <div className="spinner"></div>
          <h2>Loading...</h2>
        </div>
      )}
      
      <div className={loading ? "content hidden" : "content"}>
        <NavBar />
        <div className="finisher-header">
          <Banner />
          <Skills />
          <Projects />
          <Achievements />
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;