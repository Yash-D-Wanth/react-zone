import {Component} from 'react'
export default class Previous extends Component{
    constructor(){
        super();
        this.state={
            Num:0,
        }
    }
    display=()=>{
        this.setState(prevState=>({
            Num:prevState.Num+1
        }),()=>{console.log(this.state.Num)})
    }
    increment5(){
        this.display();
        this.display();
        this.display();
        this.display();
        this.display();
    }
    render(){
        return(
            <>
            <p>{this.state.Num}</p>
            <button onClick={this.display}>display</button>
            <button onClick={()=>this.increment5()}>5</button>
            </>
        )
    }
}