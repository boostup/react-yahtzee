import React from "react";
import { motion } from "framer-motion";

import "./PauseButton.css";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="5"
    stroke="black"
    // strokeLinecap="round"
    {...props}
  />
);

function PauseButton({ toggle }) {
  return (
    <button className="PauseButton" onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 3 0 l 0 20" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />

        <Path
          variants={{
            closed: { d: "M 15 0 l 0 20" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}

export default PauseButton;
