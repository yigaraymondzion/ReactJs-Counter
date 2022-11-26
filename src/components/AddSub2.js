import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function initialState() {
  return 0;
}

function AddSub2() {
  const [currentState, setFunction] = useState(() => initialState());

  const sub = () => {
    setFunction((prevState) => prevState - 1);
  };

  const add = () => {
    setFunction((prevState) => prevState + 1);
  };

  const reset = () => {
    setFunction(0);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h5>Changing the count value using useState and prevState</h5>
            <Button variant="primary" onClick={sub}>
              Click to Subtract 1
            </Button>
            <h1>{currentState}</h1>
            <Button variant="success" onClick={add}>
              Click to Add 1
            </Button>
            <Button variant="info" onClick={reset}>
              Click to Reset
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddSub2;
