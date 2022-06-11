import React, { useState, useEffect } from "react";
import "./Main.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import award from "../Assets/award.png";
import icon from "../Assets/icon.png";
import icon1 from "../Assets/icon1.png";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  const [jobs, setJobs] = useState([]);
  const [details, setDetails] = useState([]);

  const getJobs = () => {
    axios
      .get("http://refertest.pythonanywhere.com/job/openings")
      .then((res) => {
        const myData = res.data.data;
        setJobs(myData);
        console.log(myData);
      })
      .catch((err) => console.error(err));
  };

  const getDetails = async () => {
    try {
      const resp = await axios.get(
        "http://refertest.pythonanywhere.com/user/data"
      );
      const myData = resp.data.data;
      setDetails(myData);
      console.log(myData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getJobs();
    getDetails();
  }, []);

  return (
    <div className="main-god">
      <div className="main-subgod">
        <div className="main-nav">
          <div className="tabs-btn">
            <button>Logo Here</button>
          </div>
          <div className="profilee-icon">
            <img className="profile-img" src={details.pictureUrl} alt="" />
            <div className="details-person">
              <p className="profile-name">{details.name}</p>
              <span className="college-name">{details.college}</span>
            </div>
          </div>
        </div>
        <div className="main-home">
          <div className="home-sidebar">
            <div className="sidebar-sec">
              <img src={icon} alt="" />
              <p>Applied</p>
            </div>
            <div className="sidebar-sec1">
              <img src={award} alt="" />
              <p>Openings</p>
            </div>
            <div className="sidebar-sec">
              <img src={icon1} alt="" />
              <p>Internships</p>
            </div>
          </div>
          <div className="home-tabs">
            <div className="tabs-title">
              <p>Job Openings</p>
            </div>
            <div className="tabs-tabs">
              <div className="tabs-left">
                {jobs.map((job) => (
                  <Card jobD={job} />
                ))}
              </div>
              <div className="tabs-right">
                <div className="progress-div">
                  <h6>YOUR SKILL ANALYSIS</h6>
                  <div className="progress-item item-one">
                    <p>Machine Learning</p>
                    <div className="progress-bar-div">
                      <ProgressBar now={80} />
                      80%
                    </div>
                  </div>
                  <div className="progress-item item-two">
                    <p>C++</p>
                    <div className="progress-bar-div">
                      <ProgressBar now={60} />
                      60%
                    </div>
                  </div>
                  <div className="progress-item item-three">
                    <p>ReactJs</p>
                    <div className="progress-bar-div">
                      <ProgressBar now={24} />
                      24%
                    </div>
                  </div>
                  <div className="progress-item item-four">
                    <p>Networking Fundamentals</p>
                    <div className="progress-bar-div">
                      <ProgressBar now={96} />
                      96%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
