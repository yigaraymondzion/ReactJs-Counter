import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function AddSub1() {
  const [currentState, setFunction] = useState(0);

  function sub() {
    setFunction(currentState - 1);
  }

  function add() {
    setFunction(currentState + 1);
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h5>
              Changing the count value using useState but without prevState
              .Check it out below.
            </h5>
            <Button variant="primary" onClick={sub}>
              Click to Subtract 1
            </Button>

            <h1>{currentState}</h1>

            <Button variant="success" onClick={add}>
              Click to Add 1
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddSub1;
