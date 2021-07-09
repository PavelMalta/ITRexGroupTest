import s from './App.module.css';
import React from "react";
import {v1} from "uuid";

function App() {

    const data = [
        {
            name: "Dollars",
            unit: 1,
            rate: 2.5,
        },
        {
            name: "Euros",
            unit: 1,
            rate: 3
        },
        {
            name: "RUB",
            unit: 100,
            rate: 0.7
        },
    ]

    return (
        <div className={s.app}>
            <div className={s.wrap}>
            <table className={s.table}>
                <tr className={s.header}>
                    <th className={s.column}>Foreign currency denomination</th>
                    <th className={s.column}>Number of units of foreign currency, letter code of the currency</th>
                    <th className={s.column}>Official rate</th>
                </tr>
                {data.map((item) => {
                    return (
                        <StringTable key={v1()}
                                     name={item.name}
                                     unit={item.unit}
                                     rate={item.rate}
                        />
                    )
                })}
            </table>
        </div>
        </div>
    );
}

export const StringTable = (props) => {

    return (
        <tr className={s.row}>
            <td>{props.name}</td>
            <td>{props.unit}</td>
            <td>{props.rate}</td>
        </tr>
    )
}


export default App;
