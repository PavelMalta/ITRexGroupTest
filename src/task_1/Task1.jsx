import s from '../App.module.css';
import React, {useEffect, useState} from "react";
import {currencyAPI} from "./currency-api";
import {Table} from "./table/Table";
import {NavLink} from "react-router-dom";


export const Task1 = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        currencyAPI.getCurrency()
            .then(res => {
                setData(res.data)
            })
    }, [])

    const date = new Date().toLocaleDateString("ru", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    })

    return (
        <div className={s.app}>
            <NavLink to={'/task2'}>
                <span className={s.task2}>Look at the task 2</span>
            </NavLink>
            <div className={s.container}>
                <h1>Официальный курс белорусского рубля по отношению к иностранным валютам, на {date}</h1>
                <Table data={data}/>
            </div>
        </div>
    );
}


export default Task1;
