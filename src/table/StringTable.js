import s from "../App.module.css";
import React from "react";

export const StringTable = (props) => {

    return (
        <tr className={s.row}>
            <td className={s.column}>{props.name}</td>
            <td className={s.column}>{props.unit} {props.letterCode}</td>
            <td className={s.column}>{props.rate}</td>
        </tr>
    )
}