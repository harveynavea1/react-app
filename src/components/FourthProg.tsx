import "./FourthProg.css";
import three from "../images/three.jpg";

function FourthProg() {
  return (
    <div className="FourthProgWrapper" id="section2">
      <div className="FourthProgText">
        <h1 className="FourthProgTitle">Final Thesis</h1>
        <h2 className="FourthProgSubtitle">
          An AI Automated Disinfection Booth <br />
          and UV Sterilization Station with <br />
          Conveyor Belt for Personal Belongings.
        </h2>
        <p>
          <br />
          An Arduino, and Raspberry Pi-based, automated disinfection <br />
          using AI for human detection, and sensor - based UV <br />
          sterilization station with conveyor belt for personal belongings
        </p>
      </div>
      <div className="FourthProgCarousel">
        <img src={three} className="img-fluid img-thumbnail" alt="..." />
      </div>
    </div>
  );
}

export default FourthProg;
