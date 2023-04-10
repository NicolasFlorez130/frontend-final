import './boton-favorito.css';

interface Props {
   isFav: boolean;
   onClick: () => any;
}

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Deberás tipar las propiedades si usas este componente
 *
 *
 * @returns un JSX element
 */
const FavButton = ({ isFav, onClick }: Props) => {
   const src = isFav ? '/imagenes/star-filled.png' : '/imagenes/star.png';

   return (
      <div className="boton-favorito">
         <img onClick={onClick} src={src} alt={'favorito'} />
      </div>
   );
};

export default FavButton;
