import React,{Component} from 'react'
import Childmap from './Childmap'
export default class Parentmap extends Component{
    constructor(){
        super();
    }
    render(){
        let Heros=[
            {
                id:1,
                name:"monkey D luffy",
                age:19,
                forms:["joyboy","snake-man","bounce-man"],
            },
            {
                name:"Ichigo",
                age:19,
                id:2,
                forms:["Hallow","soul-reaper","quency"],
            },
            {
                name:"Eren yeager",
                age:24,
                id:3,
                forms:["attack-titan","founding-titan","war-hammar titan"],
            }
        ]
        let HeroList=Heros.map((Hero)=>(<Childmap Hero={Hero} key={Hero.id}/>))
        return(
            <>
            {HeroList}
            </>
        )
    }
}