import React,{Component}from 'react'
import '../App.css';
import Navbar from '../components/Truk-Data/Navbar'
import Personal from '../components/Truk-Data/Personal'
import Dates from '../components/Truk-Data/entry-dates' 
import { BrowserRouter} from 'react-router-dom';

class TrukData extends Component {

    render(){
      return (
        <div className="App"> 
          <Navbar/>
            <div>
              <p className="App-flex">
                <label>Name </label><br></br>
                <Personal className="text-bold" name="Eduardo"/>
              </p>
              <p className="App-flex">
                <label>Last Name </label><br></br>  
                <Personal className="text-bold" name="García Fernandez"/></p>
              <p className="App-flex">
                <Dates/>
              </p>
              </div>

        </div>
      
      );
    }
  }
export default TrukData;
  