import './navbar.css';

function Navbar() {
  return (
    <div className="navbar-container-main">
      <div className="navbar-container">
        <div className="code-info"></div>
        <div className="buttons-container">
          <a className="button-top" href="/about">
            <button>&lt;About/&gt; </button>
          </a>
          <a className="button-top" href="/portfolio">
            <button>&lt;Portfolio/&gt; </button>
          </a>
          {/* <a href="/contact">
        <button>Contact</button>
      </a> */}
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Navbar;
