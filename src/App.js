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
import { useEffect } from 'react';

function App() {
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

    // If the page is already fully loaded, init Finisher immediately
    if (document.readyState === 'complete') {
      initFinisher();
    } else {
      // Otherwise, wait for the load event
      window.addEventListener('load', initFinisher);
      return () => window.removeEventListener('load', initFinisher);
    }
  }, []);

  return (
    <div className="App">
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
  );
}

export default App;
