import React, { Component } from "react";
import styles from './Leaderboard.module.scss'
import LeaderboardItem from "./LeaderboardItem";


export default class Leaderboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            gridData: []
        }
    }

    componentDidMount() {
        this.fetchGridData();
    }

    async fetchGridData() {
        // Usually the key would be stored in a .env file but since this is just a mock API site I'll leave it here :)
        const fetchData = await fetch('https://my.api.mockaroo.com/deals?key=5e718740');
        const parsedData = await fetchData.json();
        this.setState({ gridData: parsedData });

        this.totalDealCounts();
    }

    totalDealCounts() {

        const userMap = {};

        const gridData = [];

        this.state.gridData.forEach(deal => {
            if (userMap[`${deal.creator.firstName} ${deal.creator.lastName}`]) {

                switch (deal.status) {
                    case 'won':
                        userMap[`${deal.creator.firstName} ${deal.creator.lastName}`].won += 1
                        break;

                    case 'lost':
                        userMap[`${deal.creator.firstName} ${deal.creator.lastName}`].lost += 1
                        break;

                    case 'open':
                        userMap[`${deal.creator.firstName} ${deal.creator.lastName}`].open += 1
                        break;

                    default:
                        throw new Error('Deal type is not "won", "lost", or "open". (In Leaderboard.jsx (render) gridDate.forEach');
                }
            }
        })

        Object.keys(userMap).forEach(employee => {
            gridData.push({
                name: employee,
                won: employee.won,
                lost: employee.lost,
                open: employee.open
            })
        })

        this.setState({gridData})
    }

    render() {

        const gridItems = this.state.gridData.map(gridItem => {
            return <LeaderboardItem
                name={gridItem.name}
            />
        })

        return (

            <div className={styles.leaderBoardContainer}>
                {gridItems}
            </div>
        )
    }
}