import React,{Component} from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import Memo from '../../Function/Memo';
export default class ParentComp extends Component{
    constructor(){
        super();
        this.state={
            name:"yashwanth"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"yashwanth"
            })
        },4000)
    }
    render(){
        return(
            <>
            {console.log("parent component")}
             <Memo name={this.state.name}/>
            <RegComp name={this.state.name}/>
            {/* <PureComp name={this.state.name}/> */}
            </>
        )
    }
}