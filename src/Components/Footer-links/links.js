import './links.css';

function ContactLinks() {
  return (
    <div className="links-container">
      <a href="https://github.com/violetacf" target="_blank" rel="noreferrer">
        <div className="img-container">
          <img className="links-logo" src="/Pictures/github.png" alt="Github" />
          <p>Github</p>
        </div>
      </a>
      <a
        href="https://twitter.com/viocodingleta"
        target="_blank"
        rel="noreferrer"
      >
        <div className="img-container">
          <img
            className="links-logo"
            src="/Pictures/Twitter.png"
            alt="Twitter"
          />
          <p>Twitter</p>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/violeta-cf/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="img-container">
          <img
            className="links-logo"
            src="/Pictures/linkedin-logo.png"
            alt="Linkedin"
          />
          <p>Linked in</p>
        </div>
      </a>
    </div>
  );
}

export default ContactLinks;
