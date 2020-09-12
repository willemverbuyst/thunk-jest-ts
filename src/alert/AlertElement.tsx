import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';

import { selectFact } from '../store/numberFact/selectors';
import { selectAppLoading } from '../store/appState/selectors';

export default function AlertElement() {
  const fact = useSelector(selectFact);
  const variant = 'success';
  const loading = useSelector(selectAppLoading);

  console.log(loading);

  if (!fact) return null;

  return <Alert variant={variant}>{fact}</Alert>;
}
