import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

import projetRD from "../assets/img/Projetos/projRD.png";
import projClimatiza from "../assets/img/Projetos/projClimatiza.png";
import projBandtec from "../assets/img/Projetos/projBandtec.png";
import projConsultaMais from "../assets/img/Projetos/projConsultaMais.png";
import projAcob from "../assets/img/Projetos/projAcob.png";
import projALife from "../assets/img/Projetos/projALife.png";
import projSebracom from "../assets/img/Projetos/projSebracom.png";
import projSncc from "../assets/img/Projetos/projSncc.png";
import projTrigg from "../assets/img/Projetos/projTrigg.png";


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
                                  <h4>RaiaDrogasil - TC sem Ablet</h4>
                                  <span>Desenvolvedor Front-End - Pleno</span>
                                </div>
                              </div>
                            </Link>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                            <Link to="/climatiza">
                              <div className="proj-imgbx">
                                <img src={projClimatiza} />
                                <div className="proj-txtx">
                                  <h4>Samsung Climatiza</h4>
                                  <span>Desenvolvedor Mobile - Júnior</span>
                                </div>
                              </div>
                            </Link>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                            <Link to="/consulta-mais">
                              <div className="proj-imgbx">
                                <img src={projConsultaMais} />
                                <div className="proj-txtx">
                                  <h4>Consultamais Tecnologia LTDA</h4>
                                  <span>Desenvolvedor Front-End</span>
                                </div>
                              </div>
                            </Link>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                            <Link to="/acob">
                              <div className="proj-imgbx">
                                <img src={projAcob} />
                                <div className="proj-txtx">
                                  <h4>ACOB</h4>
                                  <span>Desenvolvedor Front-End - Júnior</span>
                                </div>
                              </div>
                            </Link>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                            <Link to="/amazonia-life">
                              <div className="proj-imgbx">
                                <img src={projALife} />
                                <div className="proj-txtx">
                                  <h4>AmazoniaLife</h4>
                                  <span>Desenvolvedor Front-End - Júnior</span>
                                </div>
                              </div>
                            </Link>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                            <Link to="/sebracom">
                              <div className="proj-imgbx">
                                <img src={projSebracom} />
                                <div className="proj-txtx">
                                  <h4>Sebracom</h4>
                                  <span>Desenvolvedor Front-End - Júnior</span>
                                </div>
                              </div>
                            </Link>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                            <Link to="/sncc">
                              <div className="proj-imgbx">
                                <img src={projSncc} />
                                <div className="proj-txtx">
                                  <h4>SNCC</h4>
                                  <span>Desenvolvedor Front-End - Júnior</span>
                                </div>
                              </div>
                            </Link>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                            <Link to="/trigg">
                              <div className="proj-imgbx">
                                <img src={projTrigg} />
                                <div className="proj-txtx">
                                  <h4>Trigg</h4>
                                  <span>Estagiário Front-End</span>
                                </div>
                              </div>
                            </Link>
                          </Col>
                          <Col size={12} sm={6} md={4}>
                            <Link to="/bandTec">
                              <div className="proj-imgbx">
                                <img src={projBandtec} />
                                <div className="proj-txtx">
                                  <h4>Faculdade de tecnologia Bandtec</h4>
                                  <span>Estagiário</span>
                                </div>
                              </div>
                            </Link>
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
