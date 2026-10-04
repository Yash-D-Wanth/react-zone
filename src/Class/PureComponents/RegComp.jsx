import React,{Component} from 'react'
export default class RegComp extends Component{
    render(){
        return(
            <>
            {console.log("Regular Component")}
            {console.log(this.props.name)}
            </>
        )
    }
}