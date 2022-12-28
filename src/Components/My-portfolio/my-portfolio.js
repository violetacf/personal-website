import ToDo from './My-projects/To-Do/to-do';
import MyProjects from './My-projects/my-projects';
import { useState } from 'react';
import ContactLinks from '../Footer-links/links';
import './my-portfolio.css';

function MyPortfolio() {
  const [selectedTab, setSelectedTab] = useState(0);

  function CallToDo() {
    setSelectedTab(1);
  }

  return (
    <div className="portfolio-container">
      <div className="img-portfolio-container">
        <div className="function-picture-links-container">
          <div className="function-pic">
            <img id="function-pic" src="/Pictures/Function.png" alt="Function"></img>
          </div>
          <div className="contact-links-container">
            <ContactLinks />
          </div>
        </div>
        <div className="portfolio">
          <h1 id="page-title">My Portfolio...</h1>
          <p className="intro-text-container">
            I am currently working on my portfolio, you will be able to find my
            work here.
          </p>
          <MyProjects CallToDo={CallToDo} />
          {(() => {
            if (selectedTab === 1) {
              return <ToDo />;
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default MyPortfolio;
