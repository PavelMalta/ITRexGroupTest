import React from "react";
import s from "../App.module.css";
import {StringTable} from "./StringTable";
import {v1} from "uuid";

export const Table = (props) => {
    return (
        <div className={s.wrap}>
            <table>
                <tr>
                    <th>Наименование иностранной валюты</th>
                    <th>Количество единиц иностранной валюты, буквенный код валюты</th>
                    <th>Официальный курс</th>
                </tr>
                {props.data.map((item) => {
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
    )
}