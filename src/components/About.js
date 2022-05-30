import React from 'react';
var quote = require('../assets/quote.png');
var insta = require('../assets/instagramAbout.png');
var linkedin = require('../assets/linkedinAbout.png');
var gmail = require('../assets/gmailAbout.png');
const cv = require('../assets/cvAbout.png');
const doc = require('../assets/cv.pdf');
function About(props) {
  return (
    <div className="about">
      <div className="section_heads">
        <strong>About Me</strong>
      </div>
      <div className="myDescriptionAbout">
        <div className="descriptionPara">
          <p>
            Hello, I am Prateeksha Ranjan. I am a Software Engineer and a
            Fullstack Web Developer. I completed my Electrical Engineer from JSS
            Academy of Technical Education, Noida in 2021. Currently, I am
            working as a Software Engineer at [24]7.ai.
          </p>
          <p>
            On the creative front, I enjoy sketching, painting, poetry and
            graphic designing. I have compiled three anthologies and have been
            featured as a co-author in 10+ books. I have also been featured as a
            poet in Amar Ujala, National Daily Hindi Newspaper.
          </p>
          <p style={{ marginLeft: 10 }}>
            <strong>You can find me on:</strong>
          </p>
          <div className="aboutSocial">
            <div className="aboutSocial_bg">
              <a href="https://www.instagram.com/graphitophillic_/">
                <button>
                  <img src={insta} alt="insta_logo" />
                </button>
              </a>
            </div>
            <div className="aboutSocial_bg">
              <a href="https://www.linkedin.com/in/prateeksharanjan/">
                <button>
                  <img src={linkedin} alt="linkedin_logo" />
                </button>
              </a>
            </div>
            <div className="aboutSocial_bg">
              <a href="mailto:prateeksha.67@gmail.com">
                <button>
                  <img src={gmail} alt="gmail_logo" />
                </button>
              </a>
            </div>
            <div className="aboutSocial_bg">
              <a href={doc} download>
                <button>
                  <img src={cv} alt="cv_logo" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="quote">
          <img src={quote} alt="quote" />
        </div>
      </div>
    </div>
  );
}

export default About;
