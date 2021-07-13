import s from './App.module.css';
import React from "react";
import {Route, Switch} from "react-router-dom";
import Task1 from "./task_1/Task1";
import {Task2} from "./task_2/Task2";

function App() {

    return (
        <div className={s.app}>
            <Switch>
                <Route path={'/'} exact render={() => <Task1/>}/>
                <Route exact path={'/task2'} render={() => <Task2/>}/>
            </Switch>
        </div>
    );
}

export default App;
