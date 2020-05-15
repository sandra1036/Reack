import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import FilmComponent from '../complements/film/film.component'
import DetailFilm from '../complements/film/detail-list.component'

const Films=(math)=>{
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path={math.url} component={FilmComponent} exact/>
                    <Route path={`${math.url}/:id`} component={DetailFilm} exact/>
                </Switch>
            </BrowserRouter>
        </div>
    )

}


export default Films;