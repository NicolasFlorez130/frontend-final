import './Detalle.css';
import FavButton from '../components/buttons/FavButton';
import ChapterCard from '../components/chapters/ChapterCard';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Character } from '../types/characters';
import { getCharacterById } from '../services/characters';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { addFavorite, removeFavorite } from '../store/favoritesSlice';
import { Chapter } from '../types/chapters';

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 *
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 *
 *
 *
 * Uso:
 * ``` <Details /> ```
 *
 * @returns la pagina de detalle
 */
const Details = () => {
   const { id } = useParams();

   const favorites = useAppSelector(store => store.favorites.favorites);
   const dispatch = useAppDispatch();

   const [character, setCharacter] = useState<Character>();
   const [chapters, setChapters] = useState(new Array<Chapter>());

   const isFav = favorites.some(fav => fav.id === (character?.id ?? -1));

   useEffect(() => {
      if (!id) return;

      (async () => {
         setCharacter(await getCharacterById(id));
      })();

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      if (!character) return;

      (async () => {
         const promises = character.episode.map(chapter =>
            fetch(chapter).then(res => res.json() as Promise<Chapter>)
         );

         const responses = await Promise.all(promises);

         setChapters(responses);
      })();
   }, [character]);

   const toggleFav = () => {
      dispatch(isFav ? removeFavorite(character?.id ?? -1) : addFavorite(character as Character));
   };

   return character ? (
      <div className="container">
         <h3>{character.name}</h3>
         <div className={'detalle'}>
            <div className={'detalle-header'}>
               <img src={character.image} alt="Rick Sanchez" />
               <div className={'detalle-header-texto'}>
                  <p>{character.name}</p>
                  <p>Planeta: {character.location.name}</p>
                  <p>Genero: {character.gender}</p>
               </div>
               <FavButton onClick={toggleFav} isFav={isFav} />
            </div>
         </div>
         <h4>Lista de episodios donde apareció el personaje</h4>
         <div className={'episodios-grilla'}>
            {chapters.map(chapter => (
               <ChapterCard chapter={chapter} key={chapter.id} />
            ))}
         </div>
      </div>
   ) : (
      <div className="gif-container">
         <img className="loading-gif" src="loader/portal-loading.gif" alt="loader" />
      </div>
   );
};

export default Details;
