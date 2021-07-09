import s from './App.module.css';
import React, {useEffect, useState} from "react";
import {v1} from "uuid";
import {currencyAPI} from "./currency-api";

function App() {

    const [data, setData] = useState([])

    useEffect(() => {
        currencyAPI.getCurrency()
            .then(res => {
                setData(res.data)
            })
    }, [])

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
                                         name={item.Cur_Name}
                                         unit={item.Cur_Scale}
                                         rate={item.Cur_OfficialRate}
                                         letterCode={item.Cur_Abbreviation}
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
            <td>{props.unit} {props.letterCode}</td>
            <td>{props.rate}</td>
        </tr>
    )
}


export default App;
