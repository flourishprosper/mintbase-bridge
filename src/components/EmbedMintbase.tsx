import React, { useState } from "react";
import Mintbase from "mintbase-bridge";

const EmbedMintbase = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Mintbase
        contract="0x766ecb7760d6d2f70b249c5fd25535efc4a0758b"
        show={isOpen}
        handleClose={setIsOpen}
        dark="rgba(60, 60, 60, 1)"
        darker="rgba(12, 12, 12, 1)"
        darkAlpha="rgba(60, 60, 60, 0.8)"
      />
      <Button onClick={() => setIsOpen(true)}>Show Market</Button>
    </div>
  );
};
export default EmbedMintbase;
