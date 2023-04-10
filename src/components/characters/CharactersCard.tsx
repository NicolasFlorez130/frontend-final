import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { addFavorite, removeFavorite } from '../../store/favoritesSlice';
import { Character } from '../../types/characters';
import FavButton from '../buttons/FavButton';
import './tarjeta-personaje.css';

interface Props {
   character: Character;
}

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */
const CharacterCard = ({ character }: Props) => {
   const favorites = useAppSelector(store => store.favorites.favorites);

   const isFav = favorites.some(fav => fav.id === character.id);

   const dispatch = useAppDispatch();

   const toggleFav = () => {
      dispatch(isFav ? removeFavorite(character.id) : addFavorite(character));
   };

   return (
      <div className="tarjeta-personaje">
         <Link to={`/detalle/${character.id}`}>
            <img src={character.image} alt={`${character.name}`} />
         </Link>
         <div className="tarjeta-personaje-body">
            <span>{character.name}</span>
            <FavButton onClick={toggleFav} isFav={isFav} />
         </div>
      </div>
   );
};

export default CharacterCard;
