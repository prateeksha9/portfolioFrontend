import React from 'react';
const code = require('../assets/code1.png');
const write = require('../assets/write1.png');
const paint = require('../assets/paint1.png');
const insta = require('../assets/instagramAbout.png');

// const github = require('../assets/github-sign.png');

const github = require('../assets/github-sign.png');

function WhatDoIDo(props) {
  return (
    <div className="about">
      <div className="section_heads">
        <strong>What Do I Do?</strong>
      </div>
      <div className="myDescription">
        <div className="skill">
          <div className="skillicon">
            <img src={code} />
          </div>
          <div className="skilldescription">
            <div className="skillHead">
              <strong>Developer</strong>
            </div>
            <div className="skillExplain">
              <p>
                I have been learning Web Development for quite some time now.
                During my journey of learning web development I got my hands on
                quite a few technologies like java, javascript, node.js,
                react.js and wordpress.
              </p>
              <p>All my projects are available here:</p>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="aboutSocial" style={{ marginTop: '-10px' }}>
                  <a href="https://github.com/prateeksha9">
                    <button className="skillbutton">
                      <img src={github} alt="github_logo" />
                      <strong className="link"> / prateeksha9</strong>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skill">
          <div className="skillicon">
            <img src={write} />
          </div>
          <div className="skilldescription">
            <div className="skillHead">
              <strong>Poet</strong>
            </div>
            <div className="skillExplain">
              <p>
                I have been expressing myself through poetry since I was in 9th
                standard. I have written about various issues. I have also been
                featured as the head compiler, compiler and a co-author of
                various anthologies.
              </p>
              <p>Experience a part of my journey on:</p>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="aboutSocial" style={{ marginTop: '-10px' }}>
                  <a href="https://www.instagram.com/graphitophillic_/">
                    <button className="skillbutton">
                      <img src={insta} alt="insta_logo" />
                      <strong className="link"> / graphitophillic_</strong>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skill">
          <div className="skillicon">
            <img src={paint} />
          </div>
          <div className="skilldescription">
            <div className="skillHead">
              <strong>Artist</strong>
            </div>
            <div className="skillExplain">
              <p>
                I love giving shapes and shades to my ideas. You will be able to
                see my ideas in form of a painting or a sketch. I can tranform
                my ideas in different ways but sketching a potrait remains my
                favourite.
              </p>
              <p>Experience these tranformations of ideas on:</p>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="aboutSocial" style={{ marginTop: '-10px' }}>
                  <a href="https://www.instagram.com/graphitophillic_/">
                    <button className="skillbutton">
                      <img src={insta} alt="insta_logo" />
                      <strong className="link"> / graphitophillic_</strong>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatDoIDo;
// java,javascript, html, css, node.js, react.js, mongodb, express.js, photoshop, wordpress, elementor
