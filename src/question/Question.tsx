import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

export default function Question() {
  const [randomNumber, setRandomNumber] = useState<number>(0);

  console.log(randomNumber);

  return (
    <Container>
      <Row>
        <Col md={{ span: 2, offset: 5 }}>
          <Form>
            <Form.Group controlId="formNumber">
              <Form.Label>Enter a number</Form.Label>
              <Form.Control
                type="number"
                value={randomNumber}
                onChange={(e) => setRandomNumber(+e.target.value)}
              />
              <Form.Text className="text-muted">
                Enter a number, and you will get a random fact.
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
