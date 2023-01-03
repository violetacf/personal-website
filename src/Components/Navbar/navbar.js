import './navbar.css';

function Navbar() {
  return (
    // <div className="navbar-container"> I will add this as class name once I add the Spanish button
    // <div className="spanish-button"></div>
    <div className="navbar-container">
      <a href="/about">
        <button>About</button>
      </a>
      <a href="/portfolio">
        <button>My portfolio</button>
      </a>
      {/* <a href="/contact">
        <button>Contact</button>
      </a> */}
    </div>
    // </div>
  );
}

export default Navbar;
