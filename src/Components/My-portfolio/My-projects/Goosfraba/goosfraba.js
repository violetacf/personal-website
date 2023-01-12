import '../my-projects.css';

export default function Goosfraba() {
  return (
    <div className="project-container">
      <h2 className="project-title">&lt;Goosfraba/&gt;</h2>
      <div className="images-container">
        <img
          className="project-image"
          src="/Pictures/goosfraba-main.png"
          alt="goosfraba-main"
        />
      </div>
      <p>
        {' '}
        To Do list: this was our week 9 project. First time working with a team
        of four people. Monday to Friday: ideation, design in Figma, Backend,
        SQL Elephant SQL, CSS, JS, pair programming, presented on Friday,
        retrospective, ideation disney etc, manifesto
        <br />
        <br />
        Captura de pantalla del proyecto, link con gitHub (make public),
        descripcion,
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="buttons-container">
        <a href="https://todoist.com/es" target="_blank" rel="noreferrer">
          <button id="project-button">&lt;Launch App/&gt;</button>
        </a>
        <a href="https://todoist.com/es" target="_blank" rel="noreferrer">
          <button id="project-button">&lt;See code in GitHub/&gt;</button>
        </a>
      </div>
    </div>
  );
}
