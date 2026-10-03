import {useState} from 'react'
import Child from './Child'
export default function Parent(){
    const [name,setName]=useState('Santhosh');
    function display(Me){
        setName('Selva');
        console.log(`I ${Me} will take over ${name}`)
    }
    return(
        <>
            <Child display={display}/>
        </>
    )
}