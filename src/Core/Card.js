import React from "react";
import "./Main.css";
import "./Card.css";
import { BsFillShareFill, BsBookmarkDash } from "react-icons/bs";

const Card = (props) => {
  return (
    <div className="tab one main-card">
      <div className="core-company">
        <div className="core-sub">
          <div className="company-logo">
            <img
              src="https://images.unsplash.com/photo-1609421141652-f33a94b43944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpZnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              className="logo-cmp"
              alt=""
            />
          </div>
          <div className="company-details">
            <span className="post-name">{props.jobD.designation}</span>
            <span className="company-name">{props.jobD.company}</span>
          </div>
        </div>

        <div className="share-sve">
          <span className="icon-icn">
            <BsBookmarkDash />
          </span>
          <span className="icon-icn">
            <BsFillShareFill />
          </span>
        </div>
      </div>
      <div className="other-details">
        <div className="od experience">
          <span className="od-title">Minimum Experience</span>
          <span className="od-detail">{props.jobD.min_experience} Years</span>
        </div>
        <div className="line"></div>
        <div className="od location">
          <span className="od-title">Location</span>
          <span className="od-detail">{props.jobD.location}</span>
        </div>
      </div>
      <div className="skills-required">
        <span className="od-title">Skills Required</span>
        <div className="skills-list">
          {props.jobD.skills.map((skill) => (
            <span className="skill-skl">{skill }</span>
          ))}
        </div>
      </div>
      <div className="apply">
        <button className="btn-1">See Details</button>
        <button className="btn-2">Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
