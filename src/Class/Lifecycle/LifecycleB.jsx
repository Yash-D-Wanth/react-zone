import React,{Component} from 'react'
export default class LifecycleB extends Component{
    constructor(props){
        super(props)
        this.state={
            // name:"yashwanth",
        }
        console.log("constructor from B")
    }
    // display=()=>{
    //     this.setState({
    //         name:"nandhini"
    //     })
    // }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps from B")
        return null
    }
    componentDidMount(){
        console.log("componentDidMount from B")
    }
    componentDidUpdate(prevProp,prevState){
        console.log("componentDidMount from B")
    }
    shouldComponentUpdate(nextProp,nextState){
        console.log("shouldComponentUpdate from B")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate from B")
        return null
    }

    render(){
        console.log("render from B")
        return(
            <>
            </>
        )
    }
}