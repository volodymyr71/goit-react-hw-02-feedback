import React from "react";

const Section = ({ title, children }) => (
  <div className="Feedback_section">
    <p className="Feedback_text">{title}</p>
    {children}
  </div>
);

export default Section;
