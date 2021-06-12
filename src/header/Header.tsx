import React from 'react';
import { ReactElement } from 'react';

import { Navbar } from 'react-bootstrap';

const Header: React.FC = (): ReactElement => {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home">
        REDUX &bull; THUNK &bull; JEST &bull; TYPESCRIPT
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
