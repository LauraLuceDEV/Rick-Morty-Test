export default function Characters(props){
    console.log(props);

    const {charsVar} = props
    return(
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home">
                VOLVER
            </span>

            {/* CONTENEDOR */}
            <div className="container-characters">
                {charsVar.map( (character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name}/>
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}