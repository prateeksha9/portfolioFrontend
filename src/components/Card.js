import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';
const github = require('../assets/github-sign.png');
const linkIcon = require('../assets/link.png');
const youtube = require('../assets/youtube.png');
const playbook = require('../assets/playbook.png');
const amazon = require('../assets/amazon.png');

function Card({ item }) {
  const { name, desc, img } = item;
  const [String, setString] = useState(img.data);
  // const [link, setLinkStatus] = useState(false);
  const [hlink, setHlink] = useState(false);
  const [glink, setGlink] = useState(false);
  const [tech, setTech] = useState(false);
  const [ylink, setYlink] = useState(false);
  const [alink, setAlink] = useState(false);
  const [googlelink, setGooglelink] = useState(false);

  // console.log(item.technology);
  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    if (location.pathname === '/project') {
      // setLinkStatus(true);
      if (item.glink !== undefined && item.glink !== '') {
        setGlink(true);
      }

      if (item.hlink !== undefined && item.hlink !== '') {
        setHlink(true);
      }
      if (item.technology !== undefined) {
        setTech(true);
        console.log(tech);
      }
      const youtube = item.ylink;
      if (item.ylink !== undefined && youtube !== '') {
        setYlink(true);
      }
    }
    if (location.pathname === '/poem') {
      if (item.alink !== undefined && item.alink !== '') {
        setAlink(true);
      }
      if (item.googlelink !== undefined && item.googlelink !== '') {
        setGooglelink(true);
      }
    }
  }, []);
  console.log(alink);
  return (
    <div>
      <div className="oneItem">
        {/* <div className="skillicon">
          <img src={code} />
        </div> */}

        <div className="skilldescription">
          {location.pathname === '/poem' ? (
            <div>
              <div className="skillHead" style={{ marginTop: '10px' }}>
                <strong>{name}</strong>
              </div>
              <div style={{ color: 'lightgrey' }}>{item.publisher}</div>
            </div>
          ) : (
            ''
          )}
          <div className="artImage">
            <img src={`data:image/png;base64,${String}`} alt="card_image" />
          </div>
          {location.pathname !== '/poem' ? (
            <div className="skillHead">
              <strong>{name}</strong>
            </div>
          ) : (
            ''
          )}

          {/* {location.pathname !== '/poem' ? ( */}
          {item.desc !== 'Hindi' && item.desc !== 'English' ? (
            <div className="skillExplain">
              <p>{desc}</p>
            </div>
          ) : (
            ''
          )}

          {tech ? (
            <div>
              <strong>TechStack:</strong>
              <div className="techDiv">
                {item.technology.map((techie) => (
                  <div className="tech">
                    <button className="techbutton">{`${techie}`}</button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ''
          )}

          {location.pathname === '/project' || location.pathname === '/poem' ? (
            <div>
              {location.pathname === '/project' ? (
                <div>
                  <strong>
                    {glink || ylink || hlink ? 'Important Project Link:' : ''}
                  </strong>
                </div>
              ) : (
                ''
              )}

              {location.pathname === '/poem' && alink ? (
                <div>
                  <strong>Read Book on Amazon and Google Play Books:</strong>
                </div>
              ) : (
                ''
              )}

              <div>
                <div className="content">
                  {hlink ? (
                    <div className="aboutSocial">
                      <a href={item.glink}>
                        <button className="skillbutton">
                          <img src={github} alt="link_logo" />
                          <strong className="link"> Code </strong>
                        </button>
                      </a>
                    </div>
                  ) : (
                    ''
                  )}
                  {glink ? (
                    <div className="aboutSocial">
                      <a href={item.hlink}>
                        <button className="skillbutton">
                          <img src={linkIcon} alt="link_logo" />
                          <strong className="link"> Visit</strong>
                        </button>
                      </a>
                    </div>
                  ) : (
                    ''
                  )}
                  {ylink ? (
                    <div className="aboutSocial">
                      <a href={item.ylink}>
                        <button className="skillbutton">
                          <img src={youtube} alt="link_logo" />
                          <strong className="link"> Explain</strong>
                        </button>
                      </a>
                    </div>
                  ) : (
                    ''
                  )}
                  {location.pathname === '/poem' && alink ? (
                    <div className="aboutSocial">
                      <a href={item.alink}>
                        <button className="skillbutton">
                          <img src={amazon} alt="link_logo" />
                          <strong className="link"> Amazon</strong>
                        </button>
                      </a>
                    </div>
                  ) : (
                    ''
                  )}
                  {googlelink ? (
                    <div className="aboutSocial">
                      <a href={item.googlelink}>
                        <button className="skillbutton">
                          <img src={playbook} alt="link_logo" />
                          <strong className="link"> Play Book</strong>
                        </button>
                      </a>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
