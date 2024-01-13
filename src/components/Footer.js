import { Container, Row, Col } from "react-bootstrap";
import { FooterQuote } from "../components/FooterQuote";
import logo from "../assets/img/MyLogo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import github from "../assets/img//github.svg";
import twitter from "../assets/img/twitter.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <FooterQuote />
          <div 
            id="footerParent"
          >
            <div className="hidden">
              <img src={logo} alt="Logo" width={200} id="logo"/>
            </div>
            <div id="rightFooter">
              <div className="social-icon">
                <a href="#">
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a href="#">
                  <img src={github} alt="Icon" />
                </a>
                <a href="#">
                  <img src={twitter} alt="Icon" />
                </a>
              </div>
              <p>Copyright 2024. All Rights Reserved</p>
            </div>
          </div>
        </Row>
      </Container>
    </footer>
  );
};
