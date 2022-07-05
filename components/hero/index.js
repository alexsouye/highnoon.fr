import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const displayMessage = () => {
    return (
      <h1 style={{ color: "var(--text)" }} className="hero-title">
        Laisse toi guider par la
        <span className="text-color-main"> souye</span>
        <br />
        <div className="textChange">
          <div className="textChange__container">
            <div className="textChange__sprite">
              <b>Techno</b>
              <b>Hardtek</b>
              <b>Acid</b>
              <b>DNB</b>
              <b>DUB</b>
              <b>Rap</b>
            </div>
          </div>
        </div>
      </h1>
    );
  };

  return (
    <section
      style={{ backgroundColor: "var(--bg)" }}
      id="hero"
      className="jumbotron"
    >
      <Container
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={300}
          distance="30px"
        >
          {displayMessage()}
        </Fade>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <p className="hero-cta">
            <a className="cta-btn cta-btn--hero" href="#playlists">
              Découvre nos playlists
            </a>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Hero;
