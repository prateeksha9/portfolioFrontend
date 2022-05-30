import React, { Component } from 'react';
// import prats from '../assets';
import Typewriter from 'typewriter-effect';
const prats = require('../assets/photoMobile.png');
const pratsDesk = require('../assets/Prats.png');
const doc = require('../assets/cv.pdf');
const cv = require('../assets/cv.png');
console.log(window.innerWidth);
class Cover extends Component {
  render() {
    return (
      <div className="cover_div">
        <div className="pic">
          <img
            src={window.innerWidth > 550 ? pratsDesk : prats}
            alt="Prateeksha's_Picture"
            className="picSpec"
          />
        </div>
        <div className="intro">
          <div className="name_heading">
            <div className="salHead">I'M </div>
            <div className="typewriter" style={{ color: '#d27f62' }}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('PRATEEKSHA RANJAN')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('AN ENGINEER')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('A FULLSTACK DEVELOPER')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('A POET')
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString('AN ARTIST')
                    .pauseFor(1000)
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            {/* <h1>I'M Prateeksha Ranjan</h1> */}
          </div>
          <div>Engineer, Fullstack Developer, Poet, Artist</div>
          <div className="downloadlink">
            <a href={doc} download>
              {/* <button> */}
              <div className="buttondownload">
                <div className="buttondiv">
                  <div className="buttonImg">
                    <img src={cv} alt="cv_logo" />
                  </div>
                  <div className="buttontext">Download Resume</div>
                </div>
                {/* </button> */}
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Cover;
