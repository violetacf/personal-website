import './navbar.css';

function Navbar() {
  return (
    // < className="navbar-container"> I will add this as class name once I add the Spanish button
    // <div className="spanish-button"></div>
    <div className="navbar-container-main">
      <div className="navbar-container">
        <div className="code-info"></div>
        <div className="buttons-container">
          <a className="button-top" href="/about">
            <button>About</button>
          </a>
          <a className="button-top" href="/portfolio">
            <button>My portfolio</button>
          </a>
          {/* <a href="/contact">
        <button>Contact</button>
      </a> */}
        </div>
      </div>
      <hr></hr>
      {/* <div className="line-container"></div> */}
    </div>
  );
}

export default Navbar;
