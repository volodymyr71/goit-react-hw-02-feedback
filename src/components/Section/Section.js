import React from "react";
import PropTypes from "prop-types";

const Section = ({ title, children }) => (
  <div className="Feedback_section">
    <p className="Feedback_text">{title}</p>
    {children}
  </div>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
