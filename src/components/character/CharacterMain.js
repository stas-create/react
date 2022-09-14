import {characters} from "./data";
import Character from "./Character";
import './main.css'

export default function CharacterMain () {
    return(
        <div className={'main'}>
            <h1>Rick and Morty</h1>
            <div className={'box'}>{
                characters.map(character => (<Character item={character} key={character.id}/>))
            }</div>
        </div>
    )

}