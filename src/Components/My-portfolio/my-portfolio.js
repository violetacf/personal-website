import MyProjects from './My-projects/my-projects';
import ContactLinks from '../Footer-links/links';
import './my-portfolio.css';

function MyPortfolio() {
  return (
    <div className="portfolio-container">
      <div className="img-portfolio-container">
        <div className="function-picture-links-container">
          <div className="function-pic">
            <img
              id="function-pic"
              src="/Pictures/Function.png"
              alt="Function"
            ></img>
          </div>
          <div className="contact-links-container">
            <ContactLinks />
          </div>
        </div>
        <div className="portfolio">
          <h1 id="page-title">My Portfolio...</h1>
          <p className="intro-text-container">
            Here you can find some of the projects that I have been part of,
            click on the buttons and you'll find them:
          </p>
          <MyProjects />
        </div>
      </div>
    </div>
  );
}

export default MyPortfolio;
