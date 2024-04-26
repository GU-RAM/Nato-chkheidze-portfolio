import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import LightSpeed from "react-reveal/LightSpeed";

export default function PersonalSkill() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          ტექნიკური უნარები{" "}
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          პიროვნული უნარები{" "}
        </Link>
      </div>
      <LightSpeed left cascade>
        <h1 className="mt-4">პიროვნული უნარები</h1>
      </LightSpeed>
      <div className="mt-4">
        <Container>
          <Row className="g-5">
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#fe3e57", fontWeight: 700 }}
              >
                95%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"com"}
                    aria-valuenow={"95"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "95%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#fe3e57",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  კომუნიკაცია
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "100px", color: "#54faae", fontWeight: 700 }}
              >
                100%
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"pm"}
                    aria-valuenow={"100"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#54faae",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  პუნქტუალურობა{" "}
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
