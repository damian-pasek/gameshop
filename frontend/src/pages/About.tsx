import { Container, Row, Col } from "react-bootstrap";

export function About() {
  return (
      <Container className="my-5">
        <h1 className="text-center mb-4">About Us</h1>
        <Row className="align-items-center">
          <Col md={6} className="d-flex justify-content-center">
            <img
                src="/imgs/logo.png"
                alt="SklepZTP"
                className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2>Welcome to Gameshop!</h2>
            <p className="text-justify">
              Gameshop is a web application created for video game enthusiasts.
              Our goal is to provide a wide selection of games at competitive prices
              and to create a place where every gamer can find something for themselves.
            </p>
            <p className="text-justify">
              Thanks to a simple and intuitive interface, you can quickly browse,
              add to cart, and purchase games. We offer both
              the latest hits and timeless classics that made history.
            </p>
            <h4>Why choose Gameshop?</h4>
            <ul className="text-justify">
              <li>Wide selection of games.</li>
              <li>Great prices and frequent promotions.</li>
              <li>Secure payments and fast order processing.</li>
              <li>Easy access to customer support.</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-5 text-center">
          <Col>
            <h5>Join our community today!</h5>
          </Col>
        </Row>
      </Container>
  );
}