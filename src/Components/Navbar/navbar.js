import { NavLink } from 'react-router-dom';
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
          <NavLink className="button-top" to="/">
            <button>&lt;About/&gt; </button>
          </NavLink>
          <NavLink className="button-top" to="/portfolio">
            <button>&lt;Portfolio/&gt; </button>
          </NavLink>
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
