import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchPoem, { fetchBook } from '../action/fetchActions';
import Sketchcurrentlist from './Sketchcurrentlist';
const insta = require('../assets/instagramAbout.png');
function Poem(props) {
  const [showPoem, setShowPoem] = useState(true);
  const [showAnthologies, setShowAnthologies] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPoem());
    dispatch(fetchBook());
  }, []);
  const poems = useSelector((state) => state.fetchedPoem);
  const books = useSelector((state) => state.fetchedBook);
  console.log(books);
  const changeTabforPoem = function () {
    setShowPoem(true);
    setShowAnthologies(false);
  };

  const changeTabforAntho = function () {
    setShowPoem(false);
    setShowAnthologies(true);
  };

  console.log(showPoem);
  return (
    <div className="about">
      <div className="internalHeader">
        <div className="internalHeaderButton">
          <button onClick={changeTabforPoem}>Poem</button>
        </div>
        <div className="internalHeaderButton">
          <button onClick={changeTabforAntho}>Anthologies</button>
        </div>
      </div>

      {showPoem ? (
        <div>
          <div className="section_heads_page">Poems</div>
          <div className="myDescription">
            <Sketchcurrentlist list={poems} />
          </div>
        </div>
      ) : (
        <div>
          <div className="section_heads_page">Anthologies</div>
          <div className="myDescription">
            <Sketchcurrentlist list={books} />
          </div>
        </div>
      )}
      <div className="  aboutSocial " style={{ marginLeft: '2rem' }}>
        <a href="https://www.instagram.com/graphitophillic_/">
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
              Read more poems on: <img src={insta} alt="insta_logo" /> /
              graphitophillic_
            </p>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Poem;
