import ContactLinks from '../Footer-links/links';
import './contact.css';

function Contact() {
  return (
    <div className="connect-container">
      <div className="connect-title-follow">
        <h1 id="page-title">Let's Connect!</h1>
        <div className="follow-links-container">
          <p>Follow me here... </p>
          <ContactLinks />
        </div>
      </div>
      <div className="message-container">
        <div className="input-container">
          <form
            action="mailto:violeta@cique.es"
            method="post"
            enctype="text/plain"
          >
            <label>Your name...</label>
            <input type="text" name="Name" />
            <label>your email...</label>
            <input type="text" name="Email" />
          </form>
        </div>
        <div className="message-input-container">
          <label>Anything in particular you'd like to ask me?</label>
          <input type="text" />
        </div>
      </div>
      <div className="send-button-container">
        <button id="send-button" type="submit" name="submit" value="Submit">
          {/* <input type="submit" name="submit" value="Submit"></input> */}
          SEND
        </button>
        <div className="form">
          <form id="contact-form">
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message"></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
