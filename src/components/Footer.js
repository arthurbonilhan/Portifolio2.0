import { Container, Row, Col } from "react-bootstrap";
import { Newsletter } from "./Newsletter";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github_white.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter/>
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/arthurbonilha/" target="blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/arthurbonilhan" target="blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/arthurbonilha/" target="blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. Todos os direitos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
