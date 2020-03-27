import React,{Component}from 'react'
import '../App.css';
import Navbar from '../components/Truk-Data/Navbar'
import Personal from '../components/Truk-Data/Personal'
import Dates from '../components/Truk-Data/entry-dates' 
import { BrowserRouter} from 'react-router-dom';

class TrukData extends Component {

    render(){
      return (
        <BrowserRouter className="App"> 
          <Navbar/>
            <div>
              <p className="App-flex">
                <label>Name </label><br></br>
                <Personal className="text-bold" name="Eduardo"/>
              </p>
              <p className="App-flex">
                <label>Last Name </label><br></br>
                <Personal className="text-bold" name="Santamaria Garcia"></Personal>
              </p>
              <p className="App-flex">
                <Dates/>
              </p>
              {/* <div>

                <button >SAVE DATA</button>
                <button>CANCEL</button>

                </div> */}
              </div>

        </BrowserRouter>
      
      );
    }
  }
export default TrukData;
  