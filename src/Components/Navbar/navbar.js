import { NavLink } from 'react-router-dom';
import './navbar.css';

const name = 'Violeta';
const learning = true;
let spokenLanguages = ['Spanish', 'English'];
let skills = [
  'JavaScript',
  'CSS',
  'html',
  'Figma',
  'Trello',
  'Agile Methodology',
  'TypeScript',
  'React',
];

function Navbar() {
  return (
    <div className="navbar-container-main">
      <div className="navbar-container">
        <div className="code-info">
          <br></br>
          <p className="code-text">
            <span id="variable">const</span> <span id="name">name</span>
            <span id="parenthesis"> = </span>
            <span id="string"> 'Violeta'</span>
            <span id="parenthesis">;</span>
            <br></br>
            <span id="variable">const</span> <span id="name">learning</span>
            <span id="parenthesis"> = </span>
            <span id="name"> true</span>
            <span id="parenthesis">;</span>
            <br></br>
            <span id="variable">let</span>{' '}
            <span id="name">spokenLanguages</span>
            <span id="parenthesis"> = [</span>
            <span id="string">'Spanish', 'English'</span>
            <span id="parenthesis">];</span>
            <br></br>
            <span id="variable">let</span> <span id="name">skills</span>{' '}
            <span id="parenthesis">= [</span>
            <span id="string">
              'JavaScript', 'CSS', 'html', 'Figma', 'Trello', 'Agile
              Methodology', 'TypeScript', 'React'
            </span>
            <span id="parenthesis">];</span>
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
