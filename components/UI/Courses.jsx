import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

const Courses = ({ courses = [] }) => {
  return (
    <section id="courses">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle="Courses" />
            <h4 className="mt-4">Checkout My Interactive Courses</h4>
          </Col>
        </Row>

        <Row>
          {courses.map((item) => (
            <Col
              style={{ margin: "10px 0px" }}
              key={item.id}
              lg="5"
              md="6"
              sm="7"
            >
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
