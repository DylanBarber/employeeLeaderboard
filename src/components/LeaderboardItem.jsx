import React, { Component } from "react";
import styles from './LeaderboardItem.module.scss'


export default class LeaderboardItem extends Component {


    render() {
        return (

        
        <div className={styles.leaderBoardItemContainer}>

            <div className={styles.columnContainer}>
                <h2 className={styles.leaderBoardItemText}>{this.props.name}</h2>
            </div>
            
        </div>
        )
    }
}