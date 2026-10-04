import React,{Component} from 'react'
import LifecycleB from './LifecycleB'
export default class LifecycleA extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"yashwanth",
        }
        console.log("constructor from A")
        this.display=this.display.bind(this)
    }
    display(){
        this.setState({
            name:"nandhini"
        })
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps from A")
        return null
    }
    componentDidMount(){
        console.log("componentDidMount from A")
    }
    componentDidUpdate(prevProp,prevState){
        console.log("componentDidUpdate from A")
    }
    shouldComponentUpdate(nextProp,nextState){
        console.log("shouldComponentUpdate from A")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate from A")
        return null
    }

    render(){
        console.log("render from A")
        return(
            <>
                <button onClick={this.display}>click</button>
                <LifecycleB/>
            </>
        )
    }
}