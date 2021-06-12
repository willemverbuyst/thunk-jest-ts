import React, { ReactElement } from 'react';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { selectMessage } from '../store/appState/selectors';

const AlertElement: React.FC = (): ReactElement | null => {
  const fact = useSelector(selectMessage);

  const variant = 'success';

  if (!fact) return null;

  return <Alert variant={variant}>{fact}</Alert>;
};

export default AlertElement;
