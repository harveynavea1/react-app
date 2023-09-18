import "./Navbar.css"; // You can create a CSS file for styling

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  ">
      <div className="container-fluid justify-content-right">
        <a className="navbar-brand">My Portfolio</a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div
          className="collapse navbar-collapse justify-content-center "
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              link
              Home
            </a>
            <a className="nav-link" href="#">
              Projects
            </a>
            <a className="nav-link" href="#">
              Contact
            </a>
          </div>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
