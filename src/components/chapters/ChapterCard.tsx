import { Chapter } from '../../types/chapters';
import './tarjeta-episodio.css';

interface Props {
   chapter: Chapter;
}

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 *
 *
 * @returns un JSX element
 */
const ChapterCard = ({ chapter }: Props) => {
   return (
      <div className="tarjeta-episodio">
         <h4>{chapter.name}</h4>
         <div>
            <span>{chapter.episode.split('E').join(' - E')}</span>
            <span>Lanzado el: {chapter.air_date}</span>
         </div>
      </div>
   );
};

export default ChapterCard;
