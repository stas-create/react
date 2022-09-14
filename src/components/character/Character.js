export default function Character (props){
    let {item:character} = props;
    return (
        <div className={'character'}><h2>{character.name}</h2>
            <p>Gender-{character.gender} <br/>Status- {character.status} <br/>Species-{character.species}</p>
            <img src={character.image}/>
        </div>
    );
}