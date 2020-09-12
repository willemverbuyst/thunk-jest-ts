import React from 'react';
import { useSelector } from 'react-redux';
import { selectFact } from '../store/numberFact/selectors';
import { Alert } from 'react-bootstrap';

export default function AlertElement() {
  const fact = useSelector(selectFact);
  const variant = 'success';

  if (!fact) return null;

  return <Alert variant={variant}>{fact}</Alert>;
}
