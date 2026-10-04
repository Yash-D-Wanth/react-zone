import React,{Component} from 'react'
export default class Form extends Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      villan:'aizen'
    }
  }
  handleName=(event)=>{
    this.setState({
      name:event.target.value
    })
  }
  handleVillan=(event)=>{
    this.setState({
      villan:event.target.value
    })
  }
  handleForm=(e)=>{
    e.preventDefault();
    console.log(this.state.name,this.state.villan)
  }
  render(){
    return(
      <>
      <form onSubmit={this.handleForm}>
        <label>name:</label>
        <input type="text" value={this.state.name} onChange={this.handleName}/>
        <select value={this.state.villan} onChange={this.handleVillan}>
          <option value="aizen">aizen</option>
          <option value="imu">imu</option>
          <option value="muzan">muzan</option>
        </select>
        <button type="submit">submit</button>
      </form>
      </>
    )
  }
}