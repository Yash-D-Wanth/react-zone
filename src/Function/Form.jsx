import {useState} from 'react'
export default function Form(props){
    const [name,setName]=useState('');
    const [topic,setTopic]=useState('jon');
    function handleName(e){
        setName(e.target.value)
    }
    function handleOptions(e){
        setTopic(e.target.value)
    }
    function handleForm(e){
        e.preventDefault();
        console.log(name,topic)
    }
    return(
        <>
        <form onSubmit={handleForm}>
            <label>name:</label>
            <input type="text" value={name} onChange={handleName}/>
            <br/>
            <select value={topic} onChange={handleOptions}>
                <option value="jon">jon</option>
                <option value="tyrion">tyrion</option>
                <option value="jaime">jaime</option>
            </select>
            <button type="submit">submit</button>
        </form>
        </>
    )
}