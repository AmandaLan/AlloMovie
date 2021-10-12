import classes from "./Pagination.module.css"

function Pagination(props) {
    

    function nextPage() {
        let tempPage = props.page;
        props.setPage(tempPage += 1)
    }
    function prevPage() {
        let tempPage = props.page;
        props.setPage(tempPage -= 1)
    }
    return (
        <div className={classes.buttonPagination}>
            {props.page>1 && <button className={classes.prev} onClick={prevPage}>Précédent</button>} 
            {/* si page supérieur a 2 alors affiche ça */}
            {props.page<500 && <button onClick={nextPage}>Suivant</button>}
            
        </div>
    )
}

export default Pagination
