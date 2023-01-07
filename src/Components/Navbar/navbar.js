import './navbar.css';

function Navbar() {
  return (
    <div className="navbar-container-main">
      <div className="navbar-container">
        <div className="code-info">
          <br></br>
          <p className="code-text">
            const name = 'Violeta';<br></br>
            const learning = true;<br></br>
            let spokenLanguages = ['Spanish', 'English'];<br></br>
            let skills = ['JavaScript', 'CSS', 'html', 'Figma', 'Trello', 'Agile
            Methodology', 'TypeScript', 'React'];
          </p>
        </div>
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
      <hr className="divider"></hr>
    </div>
  );
}

export default Navbar;
