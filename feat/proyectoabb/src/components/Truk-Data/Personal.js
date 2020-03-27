import React,{Component} from 'react'

class Personal extends Component{
    render(){
        return(
            <label className="text-bold">{this.props.name}</label>
        )
    }
}
export default Personal;