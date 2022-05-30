import React, { Component } from 'react';

var insta = require('../assets/instagram.png');
var linkedin = require('../assets/linkedin.png');
var github = require('../assets/github-sign.png');
var gmail = require('../assets/gmail.png');
var cv = require('../assets/cv.png');
const doc = require('../assets/cv.pdf');
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="social_bg">
          <a href={doc} download>
            <button>
              <img src={cv} alt="cv_logo" />
            </button>
          </a>
        </div>
        <div className="social_bg">
          <a href="https://www.instagram.com/graphitophillic_/">
            <button>
              <img src={insta} alt="insta_logo" />
            </button>
          </a>
        </div>
        <div className="social_bg">
          <a href="https://www.linkedin.com/in/prateeksharanjan/">
            <button>
              <img src={linkedin} alt="linkedin_logo" />
            </button>
          </a>
        </div>
        <div className="social_bg">
          <a href="https://github.com/prateeksha9">
            <button>
              <img src={github} alt="github_logo" />
            </button>
          </a>
        </div>
        <a href="mailto:prateeksha.67@gmail.com">
          <div className="social_bg">
            <button>
              <img src={gmail} alt="gmail_logo" />
            </button>
            {/* </a> */}
          </div>
        </a>
      </div>
    );
  }
}

export default Footer;
