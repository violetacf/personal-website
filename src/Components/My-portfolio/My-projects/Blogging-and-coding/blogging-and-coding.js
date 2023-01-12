import '../my-projects.css';

export default function BloggingAndCoding() {
  return (
    <div className="project-container">
      <h2 className="project-title">&lt;Blogging & Coding/&gt;</h2>
      <div className="images-container">
        <img
          className="project-image"
          src="/Pictures/blog-light.png"
          alt="blog-day"
        />
        <img
          className="project-image"
          src="/Pictures/blog-profile.png"
          alt="blog-profile"
        />
        {/* <img
        className="project-image"
        src="/Pictures/blog-dark.png"
        alt="blog-night"
      /> */}
      </div>
      <p>
        {' '}
        Description: Authentification, Authorisation, JavaScript, React, CSS,
        Pair programming, useContext.
        <br />
        <br />
        TODO: DEPLOY, LINK TO GITHUB (MAKE PUBLIC)
        <br />
        <br />
        Week 10 Hackathon with the School of Code. This week we had learnt about
        authentification and authorisation. In this Hackathon the goal was to
        use these new learnt knowledge to create an app thaat would check the
        user's identity and log them in. We chose to use Auth0 and we decided to
        make a blog app, where the user would be able to log in and see the
        posts of everyone and when going into their profile tab they would see
        only their posts. We also practised some React Hooks (useContext) to
        create a dark mode for the site.
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
