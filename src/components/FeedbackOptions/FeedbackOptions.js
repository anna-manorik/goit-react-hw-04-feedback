import React from 'react';
import PropTypes from 'prop-types';
import styles from './feedbackOptions.module.css';

const FeedbackOptions = ({ labels, onLeaveFeedback }) => (
  <ul className={styles.buttons}>
    {labels.map(label => (
      <li>
        <button className={styles.btn} onClick={() => onLeaveFeedback(label)}>
          {label}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  labels: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
