import './my-projects.css';

function MyProjects() {
  return (
    <div className="projects-container">
      <div className="project-container">
        <a href="/portfolio/todo">
          <button id="project-button">To Do List</button>
        </a>
        <p>
          {' '}
          To Do list: this was our week 9 project. First time working with a
          team of four people
        </p>
      </div>
      <div className="project-container">
        <a href="/portfolio/adventofyoga">
          <button id="project-button">Advent of Yoga</button>
        </a>
        <p>
          {' '}
          Advent of Yoga: Friday Hackathon. We completed this project pair
          programming in 6 hours
        </p>
      </div>
      <div className="project-container">
        <a href="/portfolio/blog">
          <button id="project-button">Blog</button>
        </a>
        <p>
          {' '}
          Blog: Working on Authentification, created a blog that allows to
          filter the posts depending on the author to render personal posts when
          logged in
        </p>
      </div>
    </div>
  );
}

export default MyProjects;
