import React from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from "react-parallax";
import { Container } from "react-bootstrap";

// components
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/my-carousel/mycarousel.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import ParallaxImage from "./assets/img/parallex/background.webp";
import Skills from "./pages/skills/skills.component";
import './App.css';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />
      <div className="App" style={{ position: "relative" }}>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={ParallaxImage}
          bgImageAlt="Parallax"
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={2000}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      {/* Skill Section */}
      <Skills />
    </div>
  );
}

export default App;
