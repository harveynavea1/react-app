import "./ThirdProg.css";
import two from "../images/two.jpg";
function ThirdProg() {
  return (
    <div className="ThirdProgWrapper">
      <div className="ThirdProgText">
        <h1 className="ThirdProgTitle">Academic Research</h1>
        <h2 className="ThirdProgSubTitle">
          Fusion Integration an IOT Based <br />Monitoring 
          and Watering System <br />for Small Scale Farmers.
        </h2>
        <p>
          <br />
          Arduino based watering system powered by solar energy resources <br /> and
          calibration of
          data and timing using IoT. The system is developed <br /> using thefollowing
          tools: C++, Arduino IDE and Blynk
        </p>
      </div>
      <div className="ThirdProgCarousel">
        <img src={two} className="img-fluid img-thumbnail" alt="..." />
      </div>
    </div>
  );
}

export default ThirdProg;
