//there are four ways
import {Component} from 'react'
export default class EventBind extends Component{
    constructor(){
        super()
        this.state={
            name:"ichigo",
        }
        this.clickHandler=this.clickHandler.bind(this);
        // bind the value into a variable
    }
    // can be use arrow function which is same as variable
    //clickHandler=()=>{}
    clickHandler(){
        this.setState({
            name:"luffy",
        })
    }

    render(){
        return(
            <>
            <p>{this.state.name}</p>
            <button onClick={this.clickHandler.bind(this)}>click</button>
             {/* inline binding */}
            <button onClick={()=>this.clickHandler()}>click</button>
            <button onClick={this.clickHandler}>click</button>
            {/* can be accessible for the arrow function and binded variable */}
            </>
        )
    }
}