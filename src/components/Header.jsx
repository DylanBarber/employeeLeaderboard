import React from 'react'
import styles from './Header.module.scss';

export const Header = () => {

    return (
        <div className={styles.headerContainer}>
            <img className={styles.kixieLogo} src='./kixie-logo-dark.png' alt='Kixie company logo'></img>
            <h1 className={styles.menuItem}>Employee Leaderboards</h1>
        </div>
    )
}