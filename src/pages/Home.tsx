import Filters from '../components/characters/Filters';
import CharactersGrid from '../components/characters/CharactersGrid';
import Pagination from '../components/pagination/Pagination';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { useEffect } from 'react';
import {
   clearFilter,
   fetchCharactersFiltered,
   fetchCharactersPage,
   queryModes,
   setPage,
   states,
} from '../store/charactersSlice';

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <Home /> ```
 *
 * @returns la pagina de inicio
 */
const Home = () => {
   const { page, queryMode, query, state, shownCharacters } = useAppSelector(
      store => store.characters
   );
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchCharactersPage(page));

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      if (queryMode === queryModes.all) {
         dispatch(fetchCharactersPage(page));
      } else {
         dispatch(fetchCharactersFiltered({ query, page }));
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [page]);

   const clear = () => {
      if (queryMode === queryModes.all) return;

      dispatch(clearFilter());
      dispatch(setPage(1));
      dispatch(fetchCharactersPage(1));
   };

   return (
      <div className="container">
         <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button onClick={clear} className="danger">
               Limpiar filtros
            </button>
         </div>
         <Filters />
         <Pagination />
         {state === states.fulfilled ? (
            <CharactersGrid characters={shownCharacters} />
         ) : state === states.pending || state === states.initial ? (
            <div className="gif-container">
               <img className="loading-gif" src="loader/portal-loading.gif" alt="loader" />
            </div>
         ) : (
            'A sucedido in error cargando la información, intenta nuevamente'
         )}
         <Pagination />
      </div>
   );
};

export default Home;
