import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.css';

const Header = ({ title }) => {
  return (
    <header className={styles.Header}>
      <h1>{title}</h1>
      <h4>a react madlib</h4>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
