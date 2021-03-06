import React, { FormEvent, ReactElement, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { fetchFact } from '../store/factState/action-creator';

const Question: React.FC = (): ReactElement => {
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
                onChange={(e) => setInputNumber(Number(e.target.value))}
              />
              <Form.Text className="text-muted">Enter a number, and you will get a random fact.</Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Question;
