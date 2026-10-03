import {Component} from 'react'
export default class Childmap extends Component{
    render(){
        const {Hero}=this.props
        let FormList=Hero.forms.map((form)=>(<li key={form}>{form}</li>))
        return(
            <>
            <p>i am {Hero.name},I am {Hero.age}</p>
            <ul>{FormList}</ul>
            </>
        )
    }
}