import React from "react";
import styled from "styled-components";
import { AiFillHome, AiFillSound } from "react-icons/ai";
import { BsCameraReelsFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import { Container, Row, Col } from "react-bootstrap";

const LeftNavBar = () => {
  return (
    <Wrapper>
      <div className='sidebar-nav'>
        <Container>
          <Row>
            <Col xs={12} sm={3} className='nav-bg p-0'>
              <div className='text-center'>
                <div className='nav-icon'>
                  <span>Home</span> <AiFillHome />
                </div>
                <div className='nav-icon'>
                  <span>Camera</span> <BsCameraReelsFill />
                </div>
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
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar-nav {
    .nav-bg {
      height: 100vh;
      background: var(--primary-color);
      transition: width 1s cubic-bezier(0, 0.82, 0.63, 0.99);
    }
  }

  .nav-icon {
    width: 100%;
    font-size: 2rem;
    margin: 1rem 0;
    padding: 0.5rem;
    color: var(--primary-white);
    transition: background-color 1s ease;
    span {
      font-size: 0;
      font-weight: bold;
      opacity: 0;
      transition: all 0.2s;
    }
  }
  .nav-icon:hover {
    background-color: var(--primary-black);
  }

  .nav-bg:hover {
    width: 15vw !important;
    .nav-icon {
      display: flex;
      justify-content: space-around;
      margin: 1.8rem 0;
    }
    span {
      /* display: block; */
      opacity: 1;
      font-size: 1.5rem;
    }
  }
`;

export default LeftNavBar;
