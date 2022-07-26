import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp newSletter-none">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <p>Precisa de um Front-end?</p>
              <h3>Vamos Trabalhar juntos.</h3>
            </Col>
            <Col md={6} xl={7} className="new-Job">
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <h2>arthurbonilhan@gmail.com</h2>
                  {/* <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" /> */}
                  {/* <button type="submit">Submit</button> */}
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
