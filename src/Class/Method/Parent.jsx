import React,{Component} from 'react'
import Child from './Child'
export default class Parent extends Component{
    constructor(){
        super();
        this.state={
            name:"aizen",
        };
    }
    display=(Me)=>{
        this.setState(()=>({
            name:"doflamingo",
        }))
        console.log(` ${Me} vs ${this.state.name}`)
    }
    render(){
        return(
            <>
            <Child display={this.display}/>
            </>
        )
    }
}