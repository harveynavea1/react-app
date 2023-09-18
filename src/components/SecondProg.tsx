import "./SecondProg.css";
import one from "../images/one.png";
import two from "../images/two.png";
import three from "../images/three.png";

function SecondProg() {
  return (
    <div className="SecondProgWrapper" id="section2">
      <div className="SecondProgText">
        <h1 className="Title">Website Development </h1>
        <h2 className="SubTitle">Internship</h2>
        <p>
          <br />
          Created a server-side website that has features of<br />
          CRUD(Create,Read,Update,Delete), 
          responsive design,<br /> database, login page, and printing of table
          developed using <br />
          the following tools: CSS, HTML, JS, PHP, and MySql
        </p>
      </div>
      <div className="SecondProgCarousel">
        <img src={one} className="img-fluid img-thumbnail" alt="..." />
      </div>
    </div>
  );
}

export default SecondProg;
