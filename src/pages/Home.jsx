import React from "react";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import CenterContent from "../components/CenterContent";

import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      {/* <Row className='m-0'>
        <Col xs={1} sm={1} md={2} className='d-none d-sm-block p-0'>
          <LeftSidebar />
        </Col>
        <Col xs={12} sm={9} md={7}>
          <CenterContent />
        </Col>
        <Col xs={1} sm={1} md={2} className='d-none d-sm-block'>
          <RightSidebar />
        </Col>
      </Row> */}
      <div className="left-sidebar">
        <LeftSidebar />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .left-sidebar {
    max-width: 25rem;
  }
`;

export default Home;
