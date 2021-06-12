import React, { ReactElement } from 'react';

import Alert from './alert/AlertElement';
import Header from './header/Header';
import Question from './question/Question';

const App: React.FC = (): ReactElement => {
  return (
    <>
      <Header />
      <Alert />
      <Question />
    </>
  );
};

export default App;
