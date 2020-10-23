import React from "react";

import "./Modal.css";

export default ({ children }) => {
  return (
    <div className="Modal-backdrop">
      <div className="Modal">{children}</div>;
    </div>
  );
};
