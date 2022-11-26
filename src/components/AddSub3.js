import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function AddSub3() {
  const [currentState, setFunction] = useState({
    message: "This is the initial value-> ",
    count: 0,
    initialcount: 0,
    initialmessage:
      " Click Subtract Button or the Add Button to change the value ",
  });

  const message = currentState.message;
  const count = currentState.count;
  const initialcount = currentState.initialcount;
  const initialmessage = currentState.initialmessage;

  const sub = () => {
    setFunction((prevState) => {
      return {
        ...prevState,
        message: "You have subtracted 1 from the previous value ",
        count: prevState.count - 1,
        initialcount: prevState.count,
        initialmessage: " is now the new value",
      };
    });
  };

  const add = () => {
    setFunction((prevState) => {
      return {
        ...prevState,
        message: "You have added 1 to the previous value ",
        count: prevState.count + 1,
        initialcount: prevState.count,
        initialmessage: " is now the new value",
      };
    });
  };

  const reset = () => {
    setFunction((prevState) => {
      return {
        ...prevState,
        message: "This is the initial value-> ",
        count: 0,
        initialcount: 0,
        initialmessage:
          "Click Subtract Button or the Add Button to change the value ",
      };
    });
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h5>
              Changing the count value using useState with objects as well as
              prevState
            </h5>
            <Button variant="primary" onClick={sub}>
              Click to Subtract 1
            </Button>
            <h5>
              {message}
              {initialcount}
            </h5>
            <h5>
              {count} {initialmessage}
            </h5>
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

export default AddSub3;
