import React from "react";
import "./Firstprog.css";
import myPic from "../images/me.jpg";
import PDFDownloadButton from "../components/DownloadResume";
function FirstProg() {
  return (
    <div className="FirstProgWrapper" id="section1">
      <div className="FirstProgText">
        <h2 className="AboutMe">About me</h2>
        <p>
          <br />Hi! Im John Harvey M. Navea, seeking an entry-level position in the
          field of computer engineering <br />
          where I can apply my strong technical skills, passion for innovation,
          and recent academic <br />
          knowledge to contribute to the development and implementation of
          cutting-edge <br />
          software/hardware solutions. Eager to work in a dynamic team
          environment and continue <br />
          to learn and grow in the field while making a meaningful contribution
          to the organization's success.
        </p>
      </div>
      <div className="card text-center">
        <img src={myPic} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">My Resume</h5>
          <p className="card-text">Hello~~</p>
          <a href="" className="btn btn-primary ">
            Download
          </a>
        </div>
      </div>
     
    </div>
  );
}

export default FirstProg;
