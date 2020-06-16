import React, { Component } from "react";
import styles from './Leaderboard.module.scss'


export default class LeaderboardItem extends Component {


    render() {
        return (
            <tr>
                <td>
                    <h2 className={styles.leaderBoardItemText}>{this.props.name}</h2>
                </td>

                <td>
                    <h2 className={styles.leaderBoardItemText}>{this.props.won}</h2>
                </td>

                <td>
                    <h2 className={styles.leaderBoardItemText}>{this.props.lost}</h2>
                </td>

                <td>
                    <h2 className={styles.leaderBoardItemText}>{this.props.open}</h2>
                </td>
            </tr>
        )
    }
}