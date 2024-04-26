import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaMobile } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by G.D.</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} G.D.</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="socialicons">
              <a
                href="https://www.facebook.com/nato.chkheidze.73"
                target="_blank"
                rel="noreferrer"
                className="iconcolour homesocialicons"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="socialicons">
              <a
                href="tel:593 218071"
                target="_blank"
                rel="noreferrer"
                className="iconcolour homesocialicons"
              >
                <FaMobile />
              </a>
            </li>
            <li className="socialicons">
              <a
                href="https://www.instagram.com/nato.chkheidze.73/"
                target="_blank"
                rel="noreferrer"
                className="iconcolour homesocialicons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
