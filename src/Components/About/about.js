import './about.css';
import ContactLinks from '../Footer-links/links';

function About() {
  // function playSound(animal) {
  //   document.getElementById(animal).play();
  // }

  return (
    <div className="about-container">
      <div className="img-about-container">
        <div className="my-picture-links-container">
          <img src="/Pictures/My-picture.JPG" alt="my pic"></img>
          <div className="contact-container">
            <h2 className="subtitle">You can contact me here!</h2>
            <img
              className="arrow"
              src="/Pictures/arrow-down.png"
              alt="arrow down"
            ></img>
          </div>
          <div className="contact-links-container">
            <ContactLinks />
          </div>
        </div>
        <div className="about">
          <h1 id="page-title">I'm Violeta,</h1>
          <div className="how-to-pronounce">
            <h2 className="subtitle">Hear how to pronounce my name</h2>
            <audio controls>
              <source
                src="https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/vi/violeta_es_es_1.mp3"
                type="audio/mpeg"
              />{' '}
            </audio>
            {/* <div class="container">
              <a href={playSound('dog')}>
                <img src="/Pictures/sound.png" alt="speaker" />
              </a>{' '}
              <br />
              <a href={playSound('dog')}>Dog</a>
            </div>

            <audio
              id="my-name"
              src="https://ssl.gstatic.com/dictionary/static/pronunciation/2022-03-02/audio/vi/violeta_es_es_1.mp3"
              preload="auto"
            ></audio> */}
          </div>
          <p className="intro-text-container">
            I am a Madrilenian based in Bristol. <br /> I originally studied
            Primary Teaching and specialised in Autism Spectrum Disorder. <br />
            For the past five years I have worked as a SEND Tutor with people
            with limited communication, and I developed a passion for inclusion
            and accessibility. <br />I discovered programming last year through
            some online tutorials, which led me to enroll on a short course at
            the City of Bristol College, where I learnt the basics of Python.{' '}
            <br />I am one of the lucky people studying with the School of Code,
            where I am currently improving my JavaScript, CSS and HTML skills.{' '}
            <br />
            My experience makes me aware of the needs of people that might not
            have the voice to give feedback. <br />
            Therefore, I believe I can make a difference towards making sites
            more accessible to the broad spectrum of potential users.
          </p>
          <img src="/Pictures/Function-picture.png" alt="function pic"></img>
        </div>
      </div>
    </div>
  );
}

export default About;
