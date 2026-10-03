import React,{Component} from 'react'
export default class Child extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <button onClick={()=>this.props.display("yashwanth")}>display</button>
            </>
        )
    }
}