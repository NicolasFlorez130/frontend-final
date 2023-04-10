import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { nextPage, prevPage } from '../../store/charactersSlice';
import './pagination.css';

/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 *
 * @returns un JSX element
 */
const Pagination = () => {
   const { page, total } = useAppSelector(store => store.characters);

   const dispatch = useAppDispatch();

   return (
      <div className="pagination">
         <button
            onClick={() => {
               dispatch(prevPage());
            }}
            disabled={page === 1}
            className="primary">
            Anterior
         </button>
         <div>
            <p>
               Pagina: {page} / {Math.ceil(total / 20)}
            </p>
         </div>
         <button
            onClick={() => {
               dispatch(nextPage());
            }}
            disabled={page === Math.ceil(total / 20)}
            className="primary">
            Siguiente
         </button>
      </div>
   );
};

export default Pagination;
