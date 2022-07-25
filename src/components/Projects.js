import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

import projetRD from "../assets/img/Projetos/projRD.png";
import projClimatiza from "../assets/img/Projetos/projClimatiza.png";
import projBandtec from "../assets/img/Projetos/projBandtec.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Portfólio</h2>
                  <p>Conheça as soluções criadas e desenvolvidas para alguns de meus clientes</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          <Col size={12} sm={6} md={4}>
                            <Link to="/raia">
                              <div className="proj-imgbx">
                                <img src={projetRD} />
                                <div className="proj-txtx">
                                  <h4>RaiaDrogasil - Balcão</h4>
                                  <span>Desenvolvedor Front-End - Pleno</span>
                                </div>
                              </div>
                            </Link>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <img src={projClimatiza} />
                              <div className="proj-txtx">
                                <h4>Samsung Climatiza</h4>
                                <span>Desenvolvedor Mobile - Júnior</span>
                              </div>
                            </div>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <img src={projBandtec} />
                              <div className="proj-txtx">
                                <h4>Faculdade de tecnologia Bandtec</h4>
                                <span>Estagiário</span>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
        <Outlet />
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section >
  )
}
