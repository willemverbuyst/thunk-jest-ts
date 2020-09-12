import React from 'react';
import { Alert } from 'react-bootstrap';

export default function AlertElement() {
  const variant = 'success';
  return <Alert variant={variant}>Fun fact!</Alert>;
}
