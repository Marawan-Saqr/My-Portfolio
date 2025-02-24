import "./Hero.css";
import { Row, Col } from "react-bootstrap";
import Lottie from "lottie-react";
import heroAnimation from "../../animations/hero.json";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero mt-5 mb-5">
      <Row className="align-items-center">
        <Col lg={7}>
          <motion.div
            className="left"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="parent-img">
              <div className="img-avatar">
                <img src="Me.png" alt="Avatar" />
              </div>
              <div className="verified">
                <i className="fa-solid fa-certificate"></i>
              </div>
            </div>
            <div className="title">
              <h1>Software engineer, front-end developer</h1>
              <p>
                I am a front-end developer with one year of experience. I am
                passionate about creating clean, responsive, and user-friendly
                web interfaces. I have a solid foundation in HTML, CSS, and
                JavaScript and practical experience using React to build modern
                web applications and Problem-Solving.
              </p>
              <div className="social-links">
                <a href="https://github.com/Marawan-Saqr" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/marawan-saqr-233784213/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
            <a
              className="btn cv mt-3"
              href="./CV/Marawan-Mahmoud-Resume.pdf"
              download="My_CV.pdf"
            >
              Download CV
            </a>
          </motion.div>
        </Col>
        <Col lg={5}>
          <Lottie animationData={heroAnimation} />
        </Col>
      </Row>
    </div>
  );
};

export default Hero;