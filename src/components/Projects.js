import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNonTechnical, fetchProjects } from '../action/fetchActions';
import Sketchcurrentlist from './Sketchcurrentlist';
import Skillicon from './Skillicon';
const github = require('../assets/github-sign.png');

function Projects(props) {
  // const [showNonTech, setShowNonTech] = useState(false);
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(fetchProjects());
    Dispatch(fetchNonTechnical());
  }, []);
  const projects = useSelector((state) => state.fetchedProject);
  const nontechnical = useSelector((state) => state.fetchedNonTechnical);
  const [showTechnical, setShowTechnical] = useState(true);
  const changeTabforPoem = function () {
    setShowTechnical(true);
    // setShowAnthologies(false);
  };

  const changeTabforAntho = function () {
    setShowTechnical(false);
    // setShowAnthologies(true);
  };
  console.log(projects);
  return (
    <div>
      <div className="about">
        <div className="internalHeader">
          <div className="internalHeaderButton">
            <button onClick={changeTabforPoem}>Technical</button>
          </div>
          <div className="internalHeaderButton">
            <button onClick={changeTabforAntho}>Non Technical</button>
          </div>
        </div>
        {showTechnical ? (
          <div>
            <div className="section_heads_page">Technical Projects</div>
            <div className="myDescription">
              <Sketchcurrentlist list={projects} />
            </div>
          </div>
        ) : (
          <div>
            <div className="section_heads_page">Non-Technical Projects</div>
            <div className="myDescription">
              <Sketchcurrentlist list={nontechnical} />
            </div>
          </div>
        )}
        <div className="  aboutSocial " style={{ marginLeft: '2rem' }}>
          <a href="https://github.com/prateeksha9">
            <button className="skillbutton">
              <p
                className="link section_heads"
                style={{
                  color: 'aliceblue',
                  fontSize: '1rem',
                  marginBottom: '1rem',
                  marginTop: ' 1rem',
                  marginLeft: '0',
                }}
              >
                View more projects on: <img src={github} alt="github_logo" /> /
                prateeksha9
              </p>
            </button>
          </a>
        </div>
      </div>
      <div style={{ marginTop: '80px' }}>
        <Skillicon />
      </div>
    </div>
  );
}

export default Projects;
