import React from "react";
import styled from "styled-components";
import { AiFillHome, AiFillSound } from "react-icons/ai";
import { BsCameraReelsFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import { Container, Row, Col } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const LeftNavBar = () => {
  return (
    <Wrapper>
      {/* <div className='sidebar-nav'>
        <Container>
          <Row>
            <Col xs={12} sm={3} className='nav-bg p-0'>
              <div className='text-center'>
                <NavLink
                  to='/'
                  exact
                  className={(isActive) => `${isActive ? "active" : null}`}
                >
                  <div className='nav-icon'>
                    <span>Home</span> <AiFillHome />
                  </div>
                </NavLink>
                <NavLink
                  to='about'
                  className={(isActive) => `${isActive ? "active" : null}`}
                >
                  <div className='nav-icon'>
                    <span>Camera</span> <BsCameraReelsFill />
                  </div>
                </NavLink>
                <div className='nav-icon'>
                  <span>Sound</span> <AiFillSound />
                </div>
                <div className='nav-icon'>
                  <span>User</span> <FaUser />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div> */}

      <div className="sidebar-nav">
        <div className="navbar-icon-panel">
          <NavLink
            to="/"
            exact
            className={(isActive) => `${isActive ? "active" : null}`}
          >
            <div className="nav-icon">
              <AiFillHome />
            </div>
          </NavLink>
          <NavLink
            to="about"
            className={(isActive) => `${isActive ? "active" : null}`}
          >
            <div className="nav-icon">
              <BsCameraReelsFill />
            </div>
          </NavLink>
          <div className="nav-icon">
            <AiFillSound />
          </div>
          <div className="nav-icon">
            <FaUser />
          </div>
        </div>
        <div className="navbar-wide-panel">
          <ul className="wide-panel-links">
            <li>
              <NavLink
                to="/"
                className={(isActive) => `${isActive ? "active" : null}`}
              >
                <div className="nav-text">Home</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="about"
                className={(isActive) => `${isActive ? "active" : null}`}
              >
                <div className="nav-text">Home</div>
              </NavLink>
              <div className="nav-tag">15</div>
            </li>
            <li>
              {/* <NavLink> */}
              <div className="nav-text">Home</div>
              {/* </NavLink> */}
            </li>
            <li>
              {/* <NavLink> */}
              <div className="nav-text">Home</div>
              {/* </NavLink> */}
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  a:link,
  a:visited {
    color: var(--primary-black);
  }

  .sidebar-nav {
    display: flex;
    justify-content: flex-start;
  }

  .navbar-icon-panel {
    max-width: 5rem;
    height: 100vh;
    background-color: var(--primary-color);
    border-radius: 15px;
    z-index: 1;
  }

  .navbar-wide-panel {
    background-color: var(--secondary-color);
    width: 100%;
    height: 96vh;
    margin-top: 10px;
    padding: 5rem 0;
    transform: translate(-100%);
    transition: all 0.4s cubic-bezier(0, 1.04, 1, 1);
  }

  .navbar-wide-panel:hover {
    transform: translate(0);
  }

  .navbar-icon-panel:hover + .navbar-wide-panel {
    transform: translate(0);
  }

  .wide-panel-links {
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--primary-black);
      font-size: 2rem;
      font-weight: 700;
      padding: 1rem 10px;
      transition: all 0.2s;
    }

    li:hover {
      background-color: var(--primary-white);
    }
  }

  .nav-icon {
    width: 100%;
    font-size: 2rem;
    margin: 1rem 0;
    padding: 0.5rem;
    color: var(--primary-black);
    transition: background-color 0.4s;
  }
  .nav-icon:hover {
    background-color: var(--primary-white);
  }

  .nav-tag {
    background-color: var(--primary-color);
    color: var(--primary-white);
    font-size: 1.8rem;
    font-weight: 600;
    width: 3rem;
    height: 2rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .active {
    .nav-icon {
      color: var(--primary-white);
    }
    .nav-icon:hover {
      background: var(--primary-black);
    }
  }

  /**************************/
  /* BELOW 1344px (Smaller desktops) */
  /**************************/

  @media (max-width: 84em) {
  }

  /**************************/
  /* BELOW 1200px (Landscape Tablets) */
  /**************************/

  @media (max-width: 75em) {
  }

  /**************************/
  /* BELOW 944px (Tablets) */
  /**************************/

  @media (max-width: 59em) {
  }

  /**************************/
  /* BELOW 704px (Smaller tablets) */
  /**************************/

  @media (max-width: 44em) {
  }

  /**************************/
  /* BELOW 544px (Phones) */
  /**************************/

  @media (max-width: 34em) {
  }
`;

export default LeftNavBar;
