
function MovieSearch(props) {
    return (
        <div>
            <input type="text" value={props.search} onChange={(e) => props.setSearch(e.target.value)} placeholder="Rechercher votre film" />
        </div>
    )
}

export default MovieSearch
