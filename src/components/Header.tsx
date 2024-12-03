import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Header.module.scss';
import logo from '../assets/logo.svg';
import { textVariables } from '../textVariables';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <img src={logo} alt="Logo" />

      <div className={styles.buttons}>
        <Link
          className={`${styles.link} ${location.pathname === '/characters' ? styles.active : ''}`}
          to="/characters"
        >
          {textVariables.headerButtonLeft}
        </Link>
        <Link
          className={`${styles.link} ${location.pathname === '/comics' ? styles.active : ''}`}
          to="/comics"
        >
          {textVariables.headerButtonRight}
        </Link>
      </div>
    </div>
  );
};

export default Header;
