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

    async componentDidMount() {
        const deals = await this.fetchDeals();

        this.totalDealCounts(deals)
    }

    async fetchDeals() {
        // Usually the key would be stored in a .env file but since this is just a mock API site I'll leave it here :)
        const fetchData = await fetch('https://my.api.mockaroo.com/deals?key=5e718740');
        return fetchData.json();
    }

    totalDealCounts(deals) {
        const totalsMap = {};

        deals.forEach(deal => {
            const key = `${deal.creator.firstName} ${deal.creator.lastName}`;

            // If the user does not exist yet in the map as a key, add them.
            if (!totalsMap[key]) {
                totalsMap[key] = {
                    won: 0,
                    lost: 0,
                    open: 0
                };
            }

            // Tick up the counter for each type of deal that an employee has
            switch (deal.deal.status) {
                case 'won':
                    totalsMap[key].won += 1
                    break;

                case 'lost':
                    totalsMap[key].lost += 1
                    break;

                case 'open':
                    totalsMap[key].open += 1
                    break;

                default:
                    throw new Error(`Deal type is not "won", "lost", or "open". (In Leaderboard.jsx (render) parsedData.forEach. value passed was "${deal.status}"`);
            }
        })

        //Mapping over the totalsMap to form the data as needed, sorted as well
        const formedData = Object.keys(totalsMap).map(key => {
            const { won, lost, open } = totalsMap[key]

            return {
                name: key,
                won,
                lost,
                open
            }
        }).sort((a, b) => b.open - a.open);

        this.setState({ gridData: formedData })
    }

    render() {

        const gridItems = this.state.gridData.map(gridItem => {
            return <LeaderboardItem
                name={gridItem.name}
                won={gridItem.won}
                lost={gridItem.lost}
                open={gridItem.open}
            />
        })

        return (

            <table className={styles.leaderboardTable}>
                <thead>
                    <tr>
                        <th><h2>Name</h2></th>
                        <th><h2>Won</h2></th>
                        <th><h2>Lost</h2></th>
                        <th><h2>Open</h2></th>
                    </tr>
                </thead>
                <tbody>
                    {gridItems}
                </tbody>
            </table>
        )
    }
}