import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                მე გახლავართ <b className="purple">ნატო ჩხეიძე, </b> მასაჟისტი.
                ეს მოიცავს, როგორც აღმდგენ, დასასუსტებელ მასაჟს დიდებსა და
                პატარებზე.{" "}
                <b className="purple">განათლებით ბიოლოგი და მასაჟისტი </b>
                სამუშაო ადგილი <b className="purple">თბილისი, </b>
                საქართველო.
                <br />
                <br />
                განათლება მიღებული მაქვს სამშობლოსგან შორს, რუსეთში &nbsp;
                <b className="purple"> კალინინგრადის უნივერსიტეტში </b>
                <br />
                <br />
                სამუშაო გამოცდილება მოიცავს &nbsp;
                <b className="purple">
                  {" "}
                  30+ წლიან მასაჟისტისა და მანამდე სამედიცინო სფეროში
                  მოღვაწეობას{" "}
                </b>
                <br />
                <br />
                აღნიშვნის ღირსია, რომ ძალიან კმაყოფილი პაციენტების გარდა
                მიღებული მაქვს &nbsp;
                <b className="purple"> "ოქროს ხელების" ჯილდო.</b>
                <br />
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
