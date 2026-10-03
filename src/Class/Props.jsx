import React from 'react'
import {Component} from 'react'
export default class Props extends Component{
    render(){
        const {...props}=this.props;
        return(
            <h1>{props.name}</h1>
        )
    }
}