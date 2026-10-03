import Childmap from './Childmap'

export default function Parentmap() {
    const heroes = [
        {
            name: 'luffy',
            id: 1,
            age: 19,
            forms: ['joyboy', 'snake-man', 'bounce-man'],
        },
        {
            name: 'ichigo',
            id: 2,
            age: 19,
            forms: ['hollow', 'soul-reaper', 'quency'],
        },
        {
            name: 'Eren',
            id: 3,
            age: 20,
            forms: ['attack titan', 'founding titan', 'war-hammar titan'],
        },
    ]

    return (
        <>
            {heroes.map((hero) => (
                <Childmap key={hero.id} Hero={hero} />
            ))}
        </>
    )
}
