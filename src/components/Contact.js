import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ContactButton from "./ContactButton";
import linkedIn from "../assets/img/nav-icon1.svg";
import gitHub from "../assets/img/github.svg";
import twitter from "../assets/img/twitter.svg";

export const Contact = () => {
  return (
    <section className="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                  id="contactImg"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <ContactButton
                    text="Connect on LinkedIn"
                    src={linkedIn}
                    url={"https://www.linkedin.com/in/rishabh-kumar-2b17251a9/"}
                  />
                  <ContactButton
                    deg={" py-3 "}
                    text="Visit My Github"
                    src={gitHub}
                    url={"https://github.com/Rishabhkumar111"}
                  />
                  <ContactButton text="Connect on Twitter" src={twitter} url={"https://www.linkedin.com/in/rishabh-kumar-2b17251a9/"}/>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
