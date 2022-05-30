import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSketch } from '../action/fetchActions';
import Pagination from './Pagination';
import Sketchcurrentlist from './Sketchcurrentlist';
const insta = require('../assets/instagramAbout.png');

function Sketch(props) {
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(fetchSketch());
  }, []);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(10);
  const sketches = useSelector((state) => state.fetchedSketch);

  // current posts

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = sketches.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="about">
      <div className="section_heads">
        <strong>Sketches and Paintings</strong>
      </div>
      <div className="myDescription">
        <Sketchcurrentlist list={sketches} />
      </div>
      {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={sketches.length}
        paginate={paginate}
      /> */}
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
              View more sketches and paintings on:{' '}
              <img src={insta} alt="insta_logo" /> / graphitophillic_
            </p>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Sketch;
