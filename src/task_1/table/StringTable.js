import s from "../App.module.css";
import React from "react";

export const StringTable = (props) => {

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.unit} {props.letterCode}</td>
            <td className={s.rate}>{props.rate}</td>
        </tr>
    )
}