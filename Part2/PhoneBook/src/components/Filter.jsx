const Filter = ({newSearch, setNewSearch}) => {
    return (
        <div>
            Filter Show with: <input value={newSearch} onChange={(e)=> setNewSearch(e.target.value)}/>
        </div>
    )
}

export default Filter