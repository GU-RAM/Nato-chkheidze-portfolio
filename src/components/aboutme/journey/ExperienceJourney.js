import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          განათლება{" "}
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          გამოცდილება{" "}
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>გამოცდილება</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          // date="2023 - Continuing"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            პრაქტიკოსი მასაჟისტი 30+ წელი
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">პოზიცია </h6>
          <p>• რას ვაკეთებ და როგორ</p>
          <p>• რას ვაკეთებ და როგორ</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          // date="2021 - 2022"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            კალინინგრადის საავადმყოფო ...
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">ექთანი </h6>
          <p>• რას ვაკეთებდი</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
