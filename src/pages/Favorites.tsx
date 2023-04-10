import CharactersGrid from '../components/characters/CharactersGrid';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { clearFavorites } from '../store/favoritesSlice';

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <Favorites /> ```
 *
 * @returns la pagina de favoritos
 */
const Favorites = () => {
   const { favorites } = useAppSelector(store => store.favorites);

   const dispatch = useAppDispatch();

   return (
      <div className="container">
         <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={() => dispatch(clearFavorites())}>
               Eliminar todo los favoritos
            </button>
         </div>
         <CharactersGrid characters={favorites} />
      </div>
   );
};

export default Favorites;
