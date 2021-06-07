import React, { useState } from "react";
import "./App.css";
import Embed from "./Embed";
import styled from "styled-components";
import * as styles from "./styles";

const Container = styled.div`
  display: flex;
  background-image: url("./background.png");
`;

const Button = styled.button`
  display: flex;
  background-color: ${styles.DARK};
  color: ${styles.OFF_WHITE};
`;

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container className="App">
      <header className="App-header">
        <Embed
          contract="0x766ecb7760d6d2f70b249c5fd25535efc4a0758b"
          show={isOpen}
          handleClose={setIsOpen}
        />
        <Button onClick={() => setIsOpen(true)}>Show Market</Button>
      </header>
    </Container>
  );
}

export default App;
