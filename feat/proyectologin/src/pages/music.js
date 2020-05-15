import React from 'react'
import MusicComponent from '../complements/music/music.compoonent'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DetailMusic from '../complements/music/detail-list.compoenent'


const Music=(math)=>{
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path={math.url} component={MusicComponent} exact/>
                    <Route path={`${math.url}/:id`} component={DetailMusic} exact/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Music;