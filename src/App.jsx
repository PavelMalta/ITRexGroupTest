import s from './App.module.css';
import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Task1 from "./task_1/Task1";


function App() {

    return (
        <div className={s.app}>
            <Switch>
                <Route path={'/'} exact render={() => <Task1/>}/>
                {/*<Route exact path={'/task2'} render={() => <Task2/>}/>*/}
            </Switch>
        </div>
    );
}


export default App;
