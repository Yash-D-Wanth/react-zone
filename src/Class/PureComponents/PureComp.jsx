import React,{PureComponent} from 'react'
export default class PureComp extends PureComponent{
    render(){
        return(
            <>
            {
                console.log("pure component")
            }
            {console.log(this.props.name)}
            </>
        )
    }
}