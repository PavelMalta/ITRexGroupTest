import s from './App.module.css';
import React, {useEffect, useState} from "react";
import {currencyAPI} from "./currency-api";
import {Table} from "./table/Table";

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
           <Table data={data}/>
        </div>
    );
}


export default App;
