import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { fetchFact } from '../store/numberFact/actions';

export default function Question() {
  const dispatch = useDispatch();
  const [inputNumber, setInputNumber] = useState<number>(0);

  const handleSubmit = (e: FormEvent<HTMLElement>): void => {
    e.preventDefault();
    dispatch(fetchFact(inputNumber));
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
                onChange={(e) => setInputNumber(+e.target.value)}
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
