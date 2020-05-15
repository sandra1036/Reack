import React from 'react'
import  {withRouter} from 'react-router'

const DetailMusic=()=>{
    return(
            <div>

                <label>Autor: </label>

                <label>Duración: </label>

                <label>Disco: </label>

                <label>Genero: </label>
                
            </div>
    )
}
export default withRouter(DetailMusic);