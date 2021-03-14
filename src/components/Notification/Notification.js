import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message }) => (
  <div className="Feedback_section">
    <p className="Feedback_text">{message}</p>
  </div>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
