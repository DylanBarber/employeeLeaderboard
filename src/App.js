import React from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './App.module.scss';
import { Header } from './components/Header';


function App() {
  return (
    <>
      <Header />
      <div className={styles.pageContainer}>

      </div>
    </>
  );
}

export default App;
