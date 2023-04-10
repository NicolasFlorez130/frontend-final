import { useEffect, useId, useState } from 'react';
import './filtros.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { fetchCharactersFiltered, setPage, setQuery } from '../../store/charactersSlice';

const Filters = () => {
   const dispatch = useAppDispatch();
   const query = useAppSelector(store => store.characters.query);

   const [inputQuery, setInputQuery] = useState('');
   const id = useId();

   const search = () => {
      dispatch(setQuery(inputQuery.trim()));
      dispatch(fetchCharactersFiltered({ query: inputQuery.trim(), page: 1 }));
      dispatch(setPage(1));
   };

   useEffect(() => {
      query === '' && setInputQuery('');
   }, [query]);

   return (
      <div className="filtros">
         <label form={id}>Filtrar por nombre:</label>
         <input
            value={inputQuery}
            onChange={({ target: { value } }) => setInputQuery(value)}
            type="text"
            placeholder="Rick, Morty, Beth, Alien, ...etc"
            id={id}
            name="nombre"
         />
         <button onClick={search} className="primary">
            Buscar
         </button>
      </div>
   );
};

export default Filters;
