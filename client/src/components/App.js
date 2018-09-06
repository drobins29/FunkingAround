import React from "react";
import Header from "./Header";

export default ({ children }) => {
  // add styling in here
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
