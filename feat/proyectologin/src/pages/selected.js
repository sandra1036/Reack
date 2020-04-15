import React from 'react'
import ButtonSelected from '../complements/selected/button-selected.component'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Music from './music'

const Selected=()=>{
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/music" component={Music}/>
                    <Route exact path="/films"/>
                </Switch>
            </BrowserRouter>
            <ButtonSelected/>
        </div>

    )
}

export default Selected;