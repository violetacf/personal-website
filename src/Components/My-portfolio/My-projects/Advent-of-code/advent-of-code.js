import '../my-projects.css';

export default function AdventOfCode() {
  return (
    <div className="project-container">
      <h2 className="project-title">&lt;Advent of Yoga/&gt;</h2>
      <div className="images-container">
        <img
          className="project-image"
          src="/Pictures/advent-yoga-day.png"
          alt="yoga-day"
        />
        <img
          className="project-image"
          src="/Pictures/advent-yoga-night.png"
          alt="yoga-night"
        />
      </div>
      <p>
        {' '}
        Description: JavaScript, React, CSS, Pair programming, useContext.
        programming in 6 hours
        <br />
        <br />
        Week 11 Hackathon with the School of Code. This week we learnt about
        deployment. We chose to make a Christmas related app and came with the
        idea of an advent of yoga. We also added a useContext to make dark mode
        for the site. We created our own database with 25 days, each containing
        an object with a picture, description, name of pose. We deployed this
        app using Render, we also used Netlify during the week. This was the
        first project that we deployed back end and front end. Stretch goal for
        the app: create different difficulties for the user to choose from, and
        to link the days with the date, so the user wouldn't be able to see days
        ahead.
      </p>
      <div className="buttons-container">
        <a
          href="https://advent-of-yoga-miko-violeta-hackathon.onrender.com/"
          target="_blank"
          rel="noreferrer"
        >
          <button id="project-button">&lt;Launch App/&gt;</button>
        </a>
        <a href="https://todoist.com/es" target="_blank" rel="noreferrer">
          <button id="project-button">&lt;See code in GitHub/&gt;</button>
        </a>
      </div>
    </div>
  );
}
