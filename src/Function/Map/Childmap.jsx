export default function Childmap({Hero}){
    const formsList = Hero.forms.map((form) => (
        <li key={form}>{form}</li>
    ))

    return(
        <>
        <p>I am {Hero.name}, {Hero.age} years old.</p>
        <ul>{formsList}</ul>
        </>
    )
}