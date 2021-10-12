import classes from "./MovieSelect.module.css"

function MovieSelect(props) {
    console.log(props.languageCountry)
    let tempValue = props.value 
    let tempSetValue = props.setValue
    return (
        <div className={classes.allSelect}>

            <select 
            id={props.id}
            name={props.name}
            value={tempValue}
            onChange={(e) => tempSetValue(e.target.value)}
            >
                {props.children}
            </select>

            
           
            {/* select recherche origine film */}
            {/* <select name="country" onChange={(e) => props.setLanguageCountry(e.target.value)}>
                <option value="">--Choisissez l'origine du film--</option>
                <option value="fr">France</option>
                <option value="ja">Japon</option>
                <option value="en">Anglais</option>
            </select> */}
            {/* select changer langue film */}
            {/* <select name="country" onChange={(e) => props.setLanguage(e.target.value)}>
                <option value="">--Choisissez la langue--</option>
                <option value="fr">Fr</option>
                <option value="ja">Ja</option>
                <option value="en">En</option>
            </select> */}
        </div>
    )
}

export default MovieSelect
