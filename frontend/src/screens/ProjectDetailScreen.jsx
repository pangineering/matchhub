import React from "react";
import { Form, Container, Button } from "react-bootstrap";

function projectDetailScreen() {
  return (
    <>
      <h1>Project: (project name)</h1>
      <p></p>
      <Container fluid>
        <h3>Bid List</h3>
      </Container>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicBudget">
            <Form.Label>Budget</Form.Label>
            <Form.Control type="text" placeholder="Enter budget" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Message"
              style={{ height: "100px" }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default projectDetailScreen;
