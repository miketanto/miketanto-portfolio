import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { BallCanvas } from '../../components/canvas';
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  courses,
} from "../../content_option";

import {technologies} from "../../constants"
import { SlArrowDown } from "react-icons/sl";
import { FaPaperclip } from "react-icons/fa";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
            <div className = "about_me">
              <p>Hey there! I'm Michael, a software engineer who loves turning innovative ideas into tangible solutions.</p>  
                <p>
                 Whether it is studying new disruptive technologies, or spearheading development projects, I thrive on tackling complex challenges head-on. My journey has been as diverse as it's been exciting – from optimizing blockchain infrastructure to building autonomous sailboats and crafting real-time operating systems.
              </p>
              <p>
              Armed with a Bachelor's in Electrical Engineering from the University of Illinois at Urbana-Champaign, coupled with minors in Computer Science, I bring a blend of technical prowess and creative flair to every project I touch. When I'm not coding, you'll find me reading AI Medium posts, cooking creative meals, or competing in the basketball court. Let's connect and embark on a journey to transform ideas into reality!",
              </p>
            </div>
        </Row>
        <Row className="sec_sp">
          <div className = "skills_container">
            <h3 className="color_sec py-4">Skills</h3>
          </div>
          <div className="tech_wrapper">
            {technologies.map((technology) => (
              <div className="skill_ball_wrapper">
                <div className="skill_ball" key={technology.name}>
                  <BallCanvas icon={technology.icon} />
                </div>
                <div className = "skill_title">{technology.name}</div>
              </div>
            
          ))}
          </div>
        </Row>
        <Row className=" sec_sp">
        <Col lang="5">
            <h3 className="color_sec py-4">Work Timeline</h3>
            <a className = "resume_link" target="_blank" href = "https://drive.google.com/file/d/1LSThwUqNafhlrTZHzUaV_MV00VC0rqtF/view?usp=sharing">
              <div className = "paperclip_icon"><FaPaperclip/></div>
              <h4 className = "resume_title">My Resume</h4>
            </a>
          </Col>
          <Col lg="7">
            {worktimeline.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <div className="service_desc">{data.description}</div>
                </div>
              );
            })}

          </Col>
        </Row>
  
        <Row className="sec_sp">
        <Col lg="5">
            <h3 className="color_sec py-4">Relevant Courses</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
              <tr className = "course_header">
                      <th scope="row">Name</th>
                      <th>Topic</th>
                      <th>Grade</th>
                </tr>
                {courses.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
      <div className="scroll_arrow"><Link to="/portfolio"><SlArrowDown size = '40' /></Link></div>
    </HelmetProvider>
  );
};
