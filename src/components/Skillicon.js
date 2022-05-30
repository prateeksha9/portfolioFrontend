import React, { Component } from 'react';

const java = require('../assets/java.png');
const js = require('../assets/js.png');
const html = require('../assets/html.png');
const css = require('../assets/css.png');
const react = require('../assets/react.png');
const node = require('../assets/node.png');
const mongo = require('../assets/mongo.png');
const wordpress = require('../assets/wordpress.png');
const photoshop = require('../assets/photoshop.png');
const elementor = require('../assets/elementor.png');

const skillArray = [
  java,
  js,
  html,
  css,
  react,
  node,
  mongo,
  wordpress,
  elementor,
  photoshop,
];

class Skillicon extends Component {
  render() {
    return (
      <div className="about">
        <div className="section_heads" style={{ marginBottom: '1rem' }}>
          <p
            style={{
              color: 'aliceblue',
              fontSize: '1.2rem',
              marginBottom: '1rem',
            }}
          >
            I am skilled at:
          </p>
        </div>
        <div className="skillDisplay">
          {skillArray.map((skill) => (
            <div key={skill} className="skilled">
              <img src={skill} alt="js_logo" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Skillicon;
