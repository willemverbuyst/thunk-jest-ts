import React from 'react';

import { Navbar } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="#home">
        REDUX &bull; THUNK &bull; JEST &bull; TYPESCRIPT
      </Navbar.Brand>
    </Navbar>
  );
}
