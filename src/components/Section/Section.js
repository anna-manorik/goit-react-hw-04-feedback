import React from 'react';
import PropTypes from 'prop-types';
import styles from './section.module.css';

const Section = ({ title, children }) => (
  <div>
    <p className={styles.title}>{title}</p>
    {children}
  </div>
);

Section.propType = {
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Section;
