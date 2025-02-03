const Numbers = ({ persons, newSearch }) => {
    const personsToShow = newSearch === ''
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))

    return (
        <div>
            <h2>Numbers</h2>
            {personsToShow.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
        </div>
    )
}

export default Numbers