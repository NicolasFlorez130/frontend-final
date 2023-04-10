import './grilla-personajes.css';
import CharacterCard from './CharactersCard';
import { Character } from '../../types/characters';

interface Props {
   characters: Character[];
}

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un JSX element
 */
const CharactersGrid = ({ characters }: Props) => {
   return (
      <div className="grilla-personajes">
         {characters.map(character => (
            <CharacterCard key={character.id} character={character} />
         ))}
      </div>
   );
};

export default CharactersGrid;
