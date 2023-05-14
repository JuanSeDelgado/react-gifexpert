import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, onEraseCategory }) => {
  const { images, isLoading } = useFetchGifs(category);
  // El hook useFetchGifs utiliza dos props images que son las imagenes como tal
  // y isLoading que me confirma que estas imagenes ya cargaron, aun no se porque es necesario
  // Cada propo tiene su useState dentro del hook para asi manejar su estado
  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <h2>Cargando..</h2>
        // && Es un if corto que evalua su isLoading es true y de serlo ejecuta los siguiente
      }
      <div className="card-grid">
        {images.map((image) => (
          <GifItem
            key={image.id}
            /*La llave (key) es necesaria en React cuando renderizas una lista de elementos, ya que ayuda a React 
              a identificar de manera única cada elemento de la lista y a realizar una
             actualización eficiente del DOM. */
             
            {...image}
            //Esparce el Img , osea todas las propiedades que tiene img las pasa como props al componente
          />
        ))}
      </div>

      <button onClick={(e) => onEraseCategory(category)}>Eliminar</button>
      {/* Este comentario es asi ya que esta dentro del fragmento y no de una etiqueta html */}
      {/* En el onClick se le pasa la funcion anonima y dentro la referencia a la funcion erase
       esto ya que de pasarle directamente la funcion con con los parentesis se ejecuta en el render 
       es como si no recibiera el evento del click como tal*/}
    </>
  );
};
