import {Component} from 'react'
export default class State extends Component{
    constructor(){
        super()
        this.state={
            Value:"eren",
        };
    }
    display(){
        this.setState({
            Value:"jon snow",
        });
    }
    render(){
        return(
            <>
            <p>{this.state.Value}</p>
            <button onClick={()=>this.display()}>display</button>
            </>
        )
    }
}