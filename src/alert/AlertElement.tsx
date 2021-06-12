import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { selectMessage } from '../store/appState/selectors';
import { Alert } from 'react-bootstrap';

export const AlertElement: React.FC = (): ReactElement | null => {
  const fact = useSelector(selectMessage);

  const variant = 'success';

  if (!fact) return null;

  return <Alert variant={variant}>{fact}</Alert>;
};
