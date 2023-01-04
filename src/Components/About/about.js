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
          <img id="my-pic" src="/Pictures/My-picture.JPG" alt="my pic"></img>
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
          <div className="intro-text-container">
            <p>
              I am a Madrilenian based in Bristol. <br /> I originally studied
              Primary Teaching and specialised in Autism Spectrum Disorder.{' '}
              <br />
              For the past five years I have worked as a SEND Tutor with people
              with limited communication and special educational needs, and I
              developed a passion for inclusion and accessibility. <br />I
              discovered programming last year through some online tutorials,
              which led me to enroll on a short course at the City of Bristol
              College, where I learnt the basics of Python. I wanted to learn
              more and after I decided to change careers and start from zero in
              another field I looked for bootcamps (didn't have any time to
              loose!). <br />I am one of the lucky people that studied with the
              School of Code, where I am learnt JavaScript, CSS, HTML,
              TypeScript, React, agile team working skills. <br />
              My experience makes me aware of the needs of people that might not
              have the voice to give feedback. <br />
              Therefore, I believe I can make a difference towards making sites
              more accessible to the broad spectrum of potential users. Feel
              free to take a look into my portfolio and if you like my work
              contact me on Linkedin, Twitter or Github.
            </p>
            <div className="function-pic-container">
              <img
                id="function-pic"
                src="/Pictures/Function-picture2.png"
                alt="function pic"
              ></img>
              {/* <div className="spanish-button-container">
                <button>&lt;Español/&gt;</button>
              </div> */}
              {/* Spanish button ^^ */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
