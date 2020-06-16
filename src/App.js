import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './App.module.scss';
import { Header } from './components/Header';
import Leaderboard from './components/Leaderboard';


function App() {
  return (
    <>
      <Header />
      <div className={styles.pageContainer}>
        <h1>Our Team</h1>
        <Leaderboard/>
      </div>
    </>
  );
}

export default App;
