import React from 'react'
import {Component} from 'react'
export default class Props extends Component{
    render(){
        return(
            <h1>{this.props.name}</h1>
        )
    }
}