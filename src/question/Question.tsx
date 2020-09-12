import React, { FormEvent, useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export default function Question() {
  const [inputNumber, setinputNumber] = useState<number>(0);

  const handleSubmit = (e: FormEvent<HTMLElement>): void => {
    e.preventDefault();
    console.log('What is the random number? ' + inputNumber);
    fetchNumberFact(inputNumber);
  };

  const fetchNumberFact = async (num: number): Promise<void> => {
    const response = await axios.get(`http://numbersapi.com/${num}/trivia`);

    const fact = response.data;

    console.log(fact);
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 2, offset: 5 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNumber">
              <Form.Label>Enter a number</Form.Label>
              <Form.Control
                type="number"
                value={inputNumber}
                onChange={(e) => setinputNumber(+e.target.value)}
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
