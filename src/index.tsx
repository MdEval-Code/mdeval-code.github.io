import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom"
import Leaderboard from "./LeaderboardComp"

import "./index.css"

import mockDataInfillingLightSpan from "./mocks/bug_localization.json"
import mockDataComplete from "./mocks/automated_program_repair.json"
import mockDataExpalin from "./mocks/bug_identification.json"


const LeaderboardTabs = () => {
  // State to track the currently selected tab
  const [activeTab, setActiveTab] = useState('tab1');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to render the leaderboard based on the selected tab
  const renderLeaderboard = () => {
    // console.log(activeTab);
    switch (activeTab) {
      case 'tab1':
        return <Leaderboard theme={{ base: "light" }} args={[mockDataComplete, "automated_program_repair"]} />;
      case 'tab2':
        return <Leaderboard theme={{ base: "light" }} args={[mockDataExpalin, "bug_identification"]} />;
      case 'tab3':
        return <Leaderboard theme={{ base: "light" }} args={[mockDataInfillingLightSpan, "bug_localization"]} />;
      default:
        return <div>Select a tab</div>;
    }
  };
  return (
    <div className="tabs-container">
      <ul className={`tabs ${isMobile ? 'mobile' : ''}`}>
        <li className={activeTab === 'tab1' ? 'is-active' : ''} onClick={() => setActiveTab('tab1')}><a>Automated Program Repair</a></li>
        <li className={activeTab === 'tab2' ? 'is-active' : ''} onClick={() => setActiveTab('tab2')}><a>Bug Identification</a></li>
        <li className={activeTab === 'tab3' ? 'is-active' : ''} onClick={() => setActiveTab('tab3')}><a>Bug Localization</a></li>
      </ul>
      <div className="tab-content">
        {renderLeaderboard()}
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <section className="hero">
      <div className="hero-body">
        <div className="container is-fluid">
          <div className="columns  is-fullwidth">
            <div className="column has-text-centered is-fullwidth">
              <h1 className="title is-1 publication-title">
                MDEVAL: Massively Multilingual Code Debugging
              </h1>
              <div className="column has-text-centered">
                <div className="publication-links">
                  <span className="link-block">
                    <a href="https://arxiv.org/abs/2411.02310"
                      className="external-link button is-normal is-rounded is-dark">
                      <span className="icon">
                        <i className="fas fa-file-pdf"></i>
                      </span>
                      <span>Paper</span>
                    </a>
                  </span>

                  <span className="link-block">
                    <a href=""
                      className="external-link button is-normal is-rounded is-dark">
                      <span className="icon">
                        <i className="fab fa-github"></i>
                      </span>
                      <span>Code</span>
                    </a>
                  </span>

                  <span className="link-block">
                    <a href=""
                      className="external-link button is-normal is-rounded is-dark">
                      <span className="icon">
                        <i className="far fa-images"></i>
                      </span>
                      <span>Evaluation Data</span>
                    </a>
                  </span>

                  <span className="link-block">
                    <a href=""
                      className="external-link button is-normal is-rounded is-dark">
                      <span className="icon">
                        <i className="far fa-images"></i>
                      </span>
                      <span>MdEval-Instruct</span>
                    </a>
                  </span>

                  <span className="link-block">
                    <a
                      href="https://mdeval-code.github.io/"
                      className="external-link button is-normal is-rounded is-dark"
                    >
                      <span className="icon">
                        <i className="fas fa-home"></i>
                      </span>
                      <span>Home</span>
                    </a>
                  </span>

                </div>
              </div>
              <div className="column has-text-centered">
                <LeaderboardTabs />
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  </React.StrictMode>,
  document.getElementById("root")
)