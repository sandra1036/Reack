import React,{useState} from 'react'
import { Link } from 'react-router-dom'


const Dates=()=>{
 const [matricula,setMatricula]=useState('');
 const [trailer,setTrailer]=useState('')
 const handleSubmit=(e)=>{
         e.preventDefault();
         console.log('inputMatricula:'+matricula)
         console.log('inputTrailer:'+trailer)
 }
        return(
        <form onSubmit={handleSubmit}>
                <label>Truk </label><br></br>
                <input
                className="text-bold"
                id='matricula' 
                name='matricula'
                onChange={(e)=> setMatricula(e.target.value)}
                placeholder='Introduce el matricula'
                value={matricula}/><br></br>

                <label>Trailer </label><br></br>
                <input 
                className="text-bold"
                id='trailer'
                onChange={(e)=> setTrailer(e.target.value)}
                name='trailer'
                placeholder='Introduce el trailer'/>
                
                <button>SAVE DATA</button>
                <Link to="/">
                   <button>CANCEL</button>
                </Link>
        </form>
        );
}


export default Dates;