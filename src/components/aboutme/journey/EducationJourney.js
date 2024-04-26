import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function EducationJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          განათლება
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          გამოცდილება
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>კვალიფიკაციის გზა</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2004 - 2014"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            უმაღლესი განათლება{" "}
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            კალინინგრადის სახ. უნივერსიტეტი
          </h4>
          <p>4 წლის მანძილზე ვსწავლობდი ბიოლოგიას, წითელ დიპლომზე...</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2014 - 2018"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            "ოქროს ხელების ჯილდო"
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            მასაჟისტის პროფესიული კურსები{" "}
          </h4>
          <p>ვსწავლობდი მასაჟისტის პროფესიას...</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default EducationJourney;
